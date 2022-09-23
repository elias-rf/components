import type {
  CreateArgs,
  DelArgs,
  GenericObject,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { fieldsFromEntity } from "@er/utils/src/fields-from-entity";
import { isData } from "@er/utils/src/is-data";
import { isId } from "@er/utils/src/is-id";
import { isLimit } from "@er/utils/src/is-limit";
import { isOrder } from "@er/utils/src/is-order";
import { isSelect } from "@er/utils/src/is-select";
import { isWhere } from "@er/utils/src/is-where";
import { knexOrder } from "@er/utils/src/knex-order";
import { knexWhere } from "@er/utils/src/knex-where";
import { namesFromEntity } from "@er/utils/src/names-from-entity";
import {
  renameToFieldArray,
  renameToFieldObject,
  renameToFieldTuple,
  renameToNameArrayObject,
  renameToNameObject,
} from "@er/utils/src/rename-fields";
import { TConnections, TDbs } from "../../dal/connections";
import { recordClear } from "../../lib/record-clear";
import { validateThrow } from "../../lib/validate-throw";
import { entitySchema } from "../entity-schema";

export class CrudModel {
  connections: TConnections;

  constructor(connections: TConnections) {
    this.connections = connections;
  }

  // SCHEMA
  async schema({ table = "" }): Promise<Schema> {
    if (!Object.hasOwn(entitySchema, table)) {
      throw new Error(
        `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    const entity = entitySchema[table];

    return entity.fields;
  }

  // LIST
  async list({
    table = "",
    where = [],
    order = [],
    limit = 50,
    select,
  }: ListArgs = {}): Promise<GenericObject[]> {
    if (!Object.hasOwn(entitySchema, table)) {
      throw new Error(
        `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    const knex = this.connections[entitySchema[table].database as TDbs];
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
  }

  // READ
  async read({ table = "", id, select }: ReadArgs): Promise<GenericObject> {
    if (!Object.hasOwn(entitySchema, table)) {
      throw new Error(
        `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    const knex = this.connections[entitySchema[table].database as TDbs];
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
  }

  // DEL
  async del({ table = "", id }: DelArgs): Promise<number> {
    if (!Object.hasOwn(entitySchema, table)) {
      throw new Error(
        `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    const knex = this.connections[entitySchema[table].database as TDbs];
    const tbl = entitySchema[table].table;
    const entity = entitySchema[table];

    validateThrow(isId(id, entity));

    const qry = await knex(tbl).del().where(renameToFieldObject(id, entity));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  }

  // CREATE
  async create({ table = "", data }: CreateArgs): Promise<GenericObject> {
    if (!Object.hasOwn(entitySchema, table)) {
      throw new Error(
        `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    const knex = this.connections[entitySchema[table].database as TDbs];
    const tbl = entitySchema[table].table;
    const entity = entitySchema[table];

    const fieldList = fieldsFromEntity(entity);

    validateThrow(isData(data, entity));

    const [qry] = await knex(tbl)
      .insert(renameToFieldObject(data, entity))
      .returning(fieldList as any);
    return renameToNameObject(qry, entity);
  }

  // UPDATE
  async update({ table = "", id, data }: UpdateArgs): Promise<GenericObject> {
    if (!Object.hasOwn(entitySchema, table)) {
      throw new Error(
        `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    const knex = this.connections[entitySchema[table].database as TDbs];
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
  }

  // RECORD CLEAR
  async clear({ table = "" }): Promise<GenericObject> {
    if (!Object.hasOwn(entitySchema, table)) {
      throw new Error(
        `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    const entity = entitySchema[table];

    return recordClear(entity);
  }
}
