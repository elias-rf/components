import type {
  TConnections,
  TCreateArgs,
  TDelArgs,
  TFieldServer,
  TGenericObject,
  TListArgs,
  TReadArgs,
  TSelect,
  TUpdateArgs,
  TWhere,
} from "../../../types";
import { knexOrder } from "../../../utils/data/knex-order";
import { knexWhere } from "../../../utils/data/knex-where";
import { fieldsFromTable } from "../../../utils/schema/fields-from-table";
import { namesFromTable } from "../../../utils/schema/names-from-table";
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
import { TDbs } from "../../dal/connections";
import { recordClear } from "../../lib/record-clear";
import { validateThrow } from "../../lib/validate-throw";
import { db } from "../db";

export function crudModel(connections: TConnections) {
  return {
    /**
     * SCHEMA
     */
    async schema({ table = "" }): Promise<TFieldServer[]> {
      validateThrow(isTable(table, db));
      const entity = db[table];
      return entity.fields;
    },
    /**
     * COUNT
     */
    async count({
      table = "",
      where = [],
    }: {
      table?: string;
      where?: TWhere[];
      increment?: TGenericObject;
      select?: TSelect;
    } = {}): Promise<TGenericObject[]> {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      validateThrow(isWhere(where, db[table]));

      const data: TGenericObject[] = await knex(tbl)
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .count({ count: "*" });
      return data;
    },

    /**
     * LIST
     */
    async list({
      table = "",
      where = [],
      order = [],
      limit = 50,
      select,
    }: TListArgs = {}): Promise<TGenericObject[]> {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isOrder(order, db[table]));
      validateThrow(isWhere(where, db[table]));
      validateThrow(isLimit(limit));
      validateThrow(isSelect(select as string[], db[table]));

      const data: TGenericObject[] = await knex(tbl)
        .select(renameToFieldArray(select, entity))
        .limit(limit)
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .orderBy(knexOrder(renameToFieldTuple(order, entity)));
      return renameToNameArrayObject(data, db[table]);
    },

    /**
     * READ
     */
    async read({ table = "", id, select }: TReadArgs): Promise<TGenericObject> {
      validateThrow(isTable(table, db));
      validateThrow(isId(id, db[table].fields));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isId(id, db[table].fields));
      validateThrow(isSelect(select as string[], entity));

      const data = await knex(tbl)
        .select(renameToFieldArray(select, entity))
        .where(renameToFieldObject(id, entity));

      const [rec] = renameToNameArrayObject(data, entity);
      return rec || ({} as TGenericObject);
    },

    // RECORD CLEAR
    async clear({ table = "" }): Promise<TGenericObject> {
      validateThrow(isTable(table, db));
      const entity = db[table];
      return recordClear(entity);
    },

    nameList({ table = "" }) {
      validateThrow(isTable(table, db));
      const entity = db[table];
      return namesFromTable(entity);
    },

    /**
     * INCREMENT
     */
    async decrement({
      table = "",
      where = [],
      decrement = {},
      select,
    }: {
      table?: string;
      where?: TWhere[];
      decrement?: TGenericObject;
      select?: TSelect;
    } = {}): Promise<TGenericObject[]> {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isWhere(where, db[table]));
      validateThrow(isSelect(select as string[], db[table]));

      const data: TGenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .decrement(renameToFieldObject(decrement, entity))
        .returning(select as string[]);
      return renameToNameArrayObject(data, db[table]);
    },

    /**
     * INCREMENT
     */
    async increment({
      table = "",
      where = [],
      increment = {},
      select,
    }: {
      table?: string;
      where?: TWhere[];
      increment?: TGenericObject;
      select?: TSelect;
    } = {}): Promise<TGenericObject[]> {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isWhere(where, db[table]));
      validateThrow(isSelect(select as string[], db[table]));

      const data: TGenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity)))
        .increment(renameToFieldObject(increment, entity))
        .returning(select as string[]);
      return renameToNameArrayObject(data, db[table]);
    },

    /**
     * DEL
     */
    async del({ table = "", id }: TDelArgs): Promise<number> {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      validateThrow(isId(id, db[table].fields));

      const qry = await knex(tbl).del().where(renameToFieldObject(id, entity));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async create({ table = "", data }: TCreateArgs): Promise<TGenericObject> {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      const fieldList = fieldsFromTable(entity);
      validateThrow(isData(data, entity));

      const [qry] = await knex(tbl)
        .insert(renameToFieldObject(data, entity))
        .returning(fieldList as any);
      return renameToNameObject(qry, entity);
    },

    // UPDATE
    async update({
      table = "",
      id,
      data,
    }: TUpdateArgs): Promise<TGenericObject> {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      const fieldList = fieldsFromTable(entity);
      validateThrow(isId(id, db[table].fields));
      validateThrow(isData(data, entity));

      const qry = await knex(tbl)
        .update(renameToFieldObject(data, entity))
        .where(renameToFieldObject(id, entity))
        .returning(fieldList as any);
      return renameToNameObject(qry[0], entity);
    },
  };
}
