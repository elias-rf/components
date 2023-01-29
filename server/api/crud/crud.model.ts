import { db } from "../../../schema";
import type {
  TConnections,
  TCreateArgs,
  TDelArgs,
  TFieldClient,
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
import { namesFromTable } from "../../../utils/schema/names-from-table";
import {
  renameToFieldArray,
  renameToFieldObject,
  renameToFieldTuple,
  renameToNameArrayObject,
  renameToNameObject,
} from "../../../utils/schema/rename-fields";
import { isData } from "../../../utils/validate/is-data";
import { isIdClient } from "../../../utils/validate/is-id";
import { isLimit } from "../../../utils/validate/is-limit";
import { isOrder } from "../../../utils/validate/is-order";
import { isSelect } from "../../../utils/validate/is-select";
import { isTable } from "../../../utils/validate/is-table";
import { isWhere } from "../../../utils/validate/is-where";
import { TDbs } from "../../dal/connections";
import { recordClear } from "../../lib/record-clear";
import { validateThrow } from "../../lib/validate-throw";

type TCrudModel = {
  schema(args: { table: string }): Promise<TFieldClient[]>;
  list(args: TListArgs): Promise<TGenericObject[]>;
  read(args: TReadArgs): Promise<TGenericObject>;
  clear(args: { table: string }): Promise<TGenericObject>;
  nameList(args: { table: string }): string[];
  fields(args: { table: string }): TFieldServer[];
  del(args: TDelArgs): Promise<number>;
  create(args: TCreateArgs): Promise<TGenericObject>;
  update(args: TUpdateArgs): Promise<TGenericObject>;
  decrement(args: {
    table: string;
    where?: TWhere[];
    decrement?: TGenericObject;
    select?: TSelect;
  }): Promise<TGenericObject[]>;
  increment(args: {
    table: string;
    where?: TWhere[];
    increment?: TGenericObject;
    select?: TSelect;
  }): Promise<TGenericObject[]>;
  count(args: {
    table: string;
    where?: TWhere[];
    count?: TGenericObject;
    select?: TSelect;
  }): Promise<TGenericObject[]>;
};

export function crudModel(connections: TConnections): TCrudModel {
  return {
    /**
     * SCHEMA
     */
    async schema({ table }) {
      validateThrow(isTable(table, db));
      const entity = db[table];
      return entity.fields;
    },
    /**
     * COUNT
     */
    async count({ table, where = [] }) {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      validateThrow(isWhere(where, db[table].fields));

      const data: TGenericObject[] = await knex(tbl)
        .where(knexWhere(renameToFieldTuple(where, entity.fields)))
        .count({ count: "*" });
      return data;
    },

    /**
     * LIST
     */
    async list({ table, where = [], order = [], limit = 50, select }) {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isOrder(order, db[table].fields));
      validateThrow(isWhere(where, db[table].fields));
      validateThrow(isLimit(limit));
      validateThrow(isSelect(select as string[], db[table].fields));

      const data: TGenericObject[] = await knex(tbl)
        .select(renameToFieldArray(select, entity.fields))
        .limit(limit)
        .where(knexWhere(renameToFieldTuple(where, entity.fields)))
        .orderBy(knexOrder(renameToFieldTuple(order, entity.fields)));
      return renameToNameArrayObject(data, db[table].fields);
    },

    /**
     * READ
     */
    async read({ table, id, select }) {
      validateThrow(isTable(table, db));
      validateThrow(isIdClient(id, db[table].fields));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isSelect(select as string[], entity.fields));

      const data = await knex(tbl)
        .select(renameToFieldArray(select, entity.fields))
        .where(renameToFieldObject(id, entity.fields));

      const [rec] = renameToNameArrayObject(data, entity.fields);
      return rec || ({} as TGenericObject);
    },

    // RECORD CLEAR
    async clear({ table }) {
      validateThrow(isTable(table, db));
      const entity = db[table];
      return recordClear(entity.fields);
    },

    nameList({ table }) {
      validateThrow(isTable(table, db));
      const entity = db[table];
      return namesFromTable(entity);
    },

    fields({ table }) {
      validateThrow(isTable(table, db));
      return db[table].fields;
    },
    /**
     * DECREMENT
     */
    async decrement({ table, where = [], decrement = {}, select }) {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isWhere(where, db[table].fields));
      validateThrow(isSelect(select as string[], db[table].fields));

      const data: TGenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity.fields)))
        .decrement(renameToFieldObject(decrement, entity.fields))
        .returning(select as string[]);
      return renameToNameArrayObject(data, db[table].fields);
    },

    /**
     * INCREMENT
     */
    async increment({ table, where = [], increment = {}, select }) {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }
      validateThrow(isWhere(where, db[table].fields));
      validateThrow(isSelect(select as string[], db[table].fields));

      const data: TGenericObject[] = await knex(tbl)
        .hintComment("NO_ICP(accounts)")
        .where(knexWhere(renameToFieldTuple(where, entity.fields)))
        .increment(renameToFieldObject(increment, entity.fields))
        .returning(select as string[]);
      return renameToNameArrayObject(data, db[table].fields);
    },

    /**
     * DEL
     */
    async del({ table, id }) {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      validateThrow(isIdClient(id, db[table].fields));

      const qry = await knex(tbl)
        .del()
        .where(renameToFieldObject(id, entity.fields));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async create({ table, data, select }) {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      validateThrow(isData(data, entity.fields));
      if (select === undefined) {
        select = namesFromTable(entity);
      }

      const [qry] = await knex(tbl)
        .insert(renameToFieldObject(data, entity.fields))
        .returning(renameToFieldArray(select, entity.fields) as any);

      return renameToNameObject(qry, entity.fields);
    },

    // UPDATE
    async update({ table, id, data, select }) {
      validateThrow(isTable(table, db));
      const knex = connections[db[table].database as TDbs];
      const tbl = db[table].table;
      const entity = db[table];
      if (select === undefined) {
        select = namesFromTable(entity);
      }

      validateThrow(isIdClient(id, db[table].fields));
      validateThrow(isData(data, entity.fields));

      const qry = await knex(tbl)
        .update(renameToFieldObject(data, entity.fields))
        .where(renameToFieldObject(id, entity.fields))
        .returning(renameToFieldArray(select, entity.fields) as any);
      return renameToNameObject(qry[0], entity.fields);
    },
  };
}
