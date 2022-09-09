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
import { pksFromEntity } from "@er/utils/src/pks-from-entity";
import {
  renameToFieldArray,
  renameToFieldObject,
  renameToFieldTuple,
  renameToNameArrayObject,
  renameToNameObject,
} from "@er/utils/src/rename-fields";
import { entitySchema } from "../api/entity-schema";
import { TConnections, TDbs } from "../dal/connections";
import { validateThrow } from "./validate-throw";

export class Entity {
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
    this.fields = this.entity.fields;
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
  }: ListArgs = {}): Promise<GenericObject[]> {
    validateThrow(isOrder(order, this.entity));
    validateThrow(isWhere(where, this.entity));
    validateThrow(isLimit(limit));
    validateThrow(isSelect(select, this.entity));

    const data: GenericObject[] = await this.knex(this.table)
      .select(renameToFieldArray(select, this.entity))
      .limit(limit)
      .where(knexWhere(renameToFieldTuple(where, this.entity)))
      .orderBy(knexOrder(renameToFieldTuple(order, this.entity)));
    return renameToNameArrayObject(data, this.entity);
  }

  // READ
  async read({ id, select = this.nameList }: ReadArgs): Promise<GenericObject> {
    validateThrow(isId(id, this.entity));
    validateThrow(isSelect(select, this.entity));

    const data = await this.knex(this.table)
      .select(renameToFieldArray(select, this.entity))
      .where(renameToFieldObject(id, this.entity));

    const [rec] = renameToNameArrayObject(data, this.entity);
    return rec || ({} as GenericObject);
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
  async create({ data }: CreateArgs): Promise<GenericObject> {
    validateThrow(isData(data, this.entity));

    const [qry] = await this.knex(this.table)
      .insert(renameToFieldObject(data, this.entity))
      .returning(this.fieldList as any);
    return renameToNameObject(qry, this.entity);
  }

  // UPDATE
  async update({ id, data }: UpdateArgs): Promise<GenericObject> {
    validateThrow(isId(id, this.entity));
    validateThrow(isData(data, this.entity));

    const qry = await this.knex(this.table)
      .update(renameToFieldObject(data, this.entity))
      .where(renameToFieldObject(data, this.entity))
      .returning(this.fieldList as any);
    return renameToNameObject(qry[0], this.entity);
  }
}
