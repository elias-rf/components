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
import { knexOrder } from "../../../utils/data/knex-order";
import { knexWhere } from "../../../utils/data/knex-where";
import { fieldsFromEntity } from "../../../utils/schema/fields-from-entity";
import { namesFromEntity } from "../../../utils/schema/names-from-entity";
import {
  renameToFieldArray,
  renameToFieldObject,
  renameToFieldTuple,
  renameToNameArrayObject,
  renameToNameObject,
} from "../../../utils/schema/rename-fields";
import { isData } from "../../../utils/validate/is-data";
import { isId } from "../../../utils/validate/is-id";
import { isLimit } from "../../../utils/validate/is-limit";
import { isOrder } from "../../../utils/validate/is-order";
import { isSelect } from "../../../utils/validate/is-select";
import { isTable } from "../../../utils/validate/is-table";
import { isWhere } from "../../../utils/validate/is-where";
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
      return entity.schema;
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
      validateThrow(isSelect(select as string[], entitySchema[table]));

      const data: GenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .decrement(renameToFieldObject(decrement, entity))
        .returning(select as string[]);
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
      validateThrow(isSelect(select as string[], entitySchema[table]));

      const data: GenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .increment(renameToFieldObject(increment, entity))
        .returning(select as string[]);
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
      validateThrow(isSelect(select as string[], entitySchema[table]));

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
      validateThrow(isSelect(select as string[], entity));

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
