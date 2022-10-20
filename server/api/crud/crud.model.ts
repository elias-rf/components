import type {
  CreateArgs,
  DelArgs,
  GenericObject,
  ListArgs,
  ReadArgs,
  Schema,
  Select,
  UpdateArgs,
  Where,
} from "../../../types";
import { fieldsFromEntity } from "../../../utils/fields-from-entity";
import { isData } from "../../../utils/is-data";
import { isId } from "../../../utils/is-id";
import { isLimit } from "../../../utils/is-limit";
import { isOrder } from "../../../utils/is-order";
import { isSelect } from "../../../utils/is-select";
import { isTable } from "../../../utils/is-table";
import { isWhere } from "../../../utils/is-where";
import { knexOrder } from "../../../utils/knex-order";
import { knexWhere } from "../../../utils/knex-where";
import { namesFromEntity } from "../../../utils/names-from-entity";
import {
  renameToFieldArray,
  renameToFieldObject,
  renameToFieldTuple,
  renameToNameArrayObject,
  renameToNameObject,
} from "../../../utils/rename-fields";
import { TConnections, TDbs } from "../../dal/connections";
import { recordClear } from "../../lib/record-clear";
import { validateThrow } from "../../lib/validate-throw";
import { entitySchema } from "../entity-schema";

export function crudModel(connections: TConnections) {
  return {
    // SCHEMA
    async schema({ table = "" }): Promise<Schema> {
      validateThrow(isTable(table, entitySchema));
      const entity = entitySchema[table];

      return entity.fields;
    },

    // INCREMENT
    async decrement({
      table = "",
      where = [],
      decrement = {},
      select,
    }: {
      table?: string;
      where?: Where[];
      decrement?: GenericObject;
      select?: Select;
    } = {}): Promise<GenericObject[]> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      if (select === undefined) {
        select = namesFromEntity(entity);
      }
      validateThrow(isWhere(where, entitySchema[table]));
      validateThrow(isSelect(select, entitySchema[table]));

      const data: GenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .decrement(renameToFieldObject(decrement, entity))
        .returning(select);
      return renameToNameArrayObject(data, entitySchema[table]);
    },

    // INCREMENT
    async increment({
      table = "",
      where = [],
      increment = {},
      select,
    }: {
      table?: string;
      where?: Where[];
      increment?: GenericObject;
      select?: Select;
    } = {}): Promise<GenericObject[]> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      if (select === undefined) {
        select = namesFromEntity(entity);
      }
      validateThrow(isWhere(where, entitySchema[table]));
      validateThrow(isSelect(select, entitySchema[table]));

      const data: GenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .increment(renameToFieldObject(increment, entity))
        .returning(select);
      return renameToNameArrayObject(data, entitySchema[table]);
    },

    // COUNT
    async count({
      table = "",
      where = [],
    }: {
      table?: string;
      where?: Where[];
      increment?: GenericObject;
      select?: Select;
    } = {}): Promise<GenericObject[]> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      validateThrow(isWhere(where, entitySchema[table]));

      const data: GenericObject[] = await knex(tbl)
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .count({ count: "*" });
      return data;
    },

    // LIST
    async list({
      table = "",
      where = [],
      order = [],
      limit = 50,
      select,
    }: ListArgs = {}): Promise<GenericObject[]> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      if (select === undefined) {
        select = namesFromEntity(entity);
      }
      validateThrow(isOrder(order, entitySchema[table]));
      validateThrow(isWhere(where, entitySchema[table]));
      validateThrow(isLimit(limit));
      validateThrow(isSelect(select, entitySchema[table]));

      const data: GenericObject[] = await knex(tbl)
        .select(renameToFieldArray(select, entity))
        .limit(limit)
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .orderBy(knexOrder(renameToFieldTuple(order, entity)));
      return renameToNameArrayObject(data, entitySchema[table]);
    },

    // READ
    async read({ table = "", id, select }: ReadArgs): Promise<GenericObject> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      if (select === undefined) {
        select = namesFromEntity(entity);
      }
      validateThrow(isId(id, entity));
      validateThrow(isSelect(select, entity));

      const data = await knex(tbl)
        .select(renameToFieldArray(select, entity))
        .where(renameToFieldObject(id, entity));

      const [rec] = renameToNameArrayObject(data, entity);
      return rec || ({} as GenericObject);
    },

    // DEL
    async del({ table = "", id }: DelArgs): Promise<number> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      validateThrow(isId(id, entity));

      const qry = await knex(tbl).del().where(renameToFieldObject(id, entity));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async create({ table = "", data }: CreateArgs): Promise<GenericObject> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      const fieldList = fieldsFromEntity(entity);
      validateThrow(isData(data, entity));

      const [qry] = await knex(tbl)
        .insert(renameToFieldObject(data, entity))
        .returning(fieldList as any);
      return renameToNameObject(qry, entity);
    },

    // UPDATE
    async update({ table = "", id, data }: UpdateArgs): Promise<GenericObject> {
      validateThrow(isTable(table, entitySchema));
      const knex = connections[entitySchema[table].database as TDbs];
      const tbl = entitySchema[table].table;
      const entity = entitySchema[table];
      const fieldList = fieldsFromEntity(entity);
      validateThrow(isId(id, entity));
      validateThrow(isData(data, entity));

      const qry = await knex(tbl)
        .update(renameToFieldObject(data, entity))
        .where(renameToFieldObject(id, entity))
        .returning(fieldList as any);
      return renameToNameObject(qry[0], entity);
    },

    // RECORD CLEAR
    async clear({ table = "" }): Promise<GenericObject> {
      validateThrow(isTable(table, entitySchema));
      const entity = entitySchema[table];
      return recordClear(entity);
    },

    nameList({ table = "" }) {
      validateThrow(isTable(table, entitySchema));
      const entity = entitySchema[table];
      return namesFromEntity(entity);
    },
  };
}
