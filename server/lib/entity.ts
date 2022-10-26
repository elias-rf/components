import type {
  CreateArgs,
  DelArgs,
  GenericObject,
  ListArgs,
  Pks,
  ReadArgs,
  Schema,
  TEntity,
  UpdateArgs,
} from "../../types";
import { knexOrder } from "../../utils/data/knex-order";
import { knexWhere } from "../../utils/data/knex-where";
import { fieldsFromEntity } from "../../utils/schema/fields-from-entity";
import { namesFromEntity } from "../../utils/schema/names-from-entity";
import { pksFromEntity } from "../../utils/schema/pks-from-entity";
import {
  renameToFieldArray,
  renameToFieldObject,
  renameToFieldTuple,
  renameToNameArrayObject,
  renameToNameObject,
} from "../../utils/schema/rename-fields";
import { isData } from "../../utils/validate/is-data";
import { isId } from "../../utils/validate/is-id";
import { isLimit } from "../../utils/validate/is-limit";
import { isOrder } from "../../utils/validate/is-order";
import { isSelect } from "../../utils/validate/is-select";
import { isWhere } from "../../utils/validate/is-where";
import { entitySchema } from "../api/entity-schema";
import { TConnections, TDbs } from "../dal/connections";
import { recordClear } from "./record-clear";
import { validateThrow } from "./validate-throw";

export class Entity<T extends GenericObject> {
  entity: TEntity;
  entityName: string;
  knex;
  table;
  fields;
  pks: Pks;
  fieldList: string[];
  nameList: string[];

  constructor(connections: TConnections, entityName: string) {
    if (!Object.hasOwn(entitySchema, entityName)) {
      throw new Error(
        `${entityName} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
          entitySchema
        )}`
      );
    }
    this.entityName = entityName;
    this.entity = entitySchema[entityName];
    this.knex = connections[this.entity.database as TDbs];
    this.table = this.entity.table;
    this.pks = pksFromEntity(this.entity);
    this.fields = this.entity.schema;
    this.fieldList = fieldsFromEntity(this.entity);
    this.nameList = namesFromEntity(this.entity);
  }

  // SCHEMA
  async schema(): Promise<Schema> {
    return this.fields;
  }

  // LIST
  async list({
    where = [],
    order = [],
    limit = 50,
    select = this.nameList,
  }: ListArgs = {}): Promise<T[]> {
    validateThrow(isOrder(order, this.entity));
    validateThrow(isWhere(where, this.entity));
    validateThrow(isLimit(limit));
    validateThrow(isSelect(select, this.entity));

    const data: T[] = await this.knex(this.table)
      .select(renameToFieldArray(select, this.entity))
      .limit(limit)
      .where(knexWhere(renameToFieldTuple(where, this.entity)))
      .orderBy(knexOrder(renameToFieldTuple(order, this.entity)));
    return renameToNameArrayObject(data, this.entity);
  }

  // READ
  async read({ id, select = this.nameList }: ReadArgs): Promise<T> {
    validateThrow(isId(id, this.entity));
    validateThrow(isSelect(select, this.entity));

    const data = await this.knex(this.table)
      .select(renameToFieldArray(select, this.entity))
      .where(renameToFieldObject(id, this.entity));

    const [rec] = renameToNameArrayObject(data, this.entity);
    return rec || ({} as T);
  }

  // DEL
  async del({ id }: DelArgs): Promise<number> {
    validateThrow(isId(id, this.entity));

    const qry = await this.knex(this.table)
      .del()
      .where(renameToFieldObject(id, this.entity));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  }

  // CREATE
  async create({ data }: CreateArgs): Promise<T> {
    validateThrow(isData(data, this.entity));

    const [qry] = await this.knex(this.table)
      .insert(renameToFieldObject(data, this.entity))
      .returning(this.fieldList as any);
    return renameToNameObject(qry, this.entity);
  }

  // UPDATE
  async update({ id, data }: UpdateArgs): Promise<T> {
    validateThrow(isId(id, this.entity));
    validateThrow(isData(data, this.entity));

    const qry = await this.knex(this.table)
      .update(renameToFieldObject(data, this.entity))
      .where(renameToFieldObject(id, this.entity))
      .returning(this.fieldList as any);
    return renameToNameObject(qry[0], this.entity);
  }

  // RECORD CLEAR
  async clear(): Promise<GenericObject> {
    return recordClear(this.entity);
  }
}
