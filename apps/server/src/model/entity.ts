import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  Pks,
  ReadArgs,
  Schema,
  SchemaField,
  TEntity,
  TEntitySchema,
  UpdateArgs,
} from "@er/types";

import {
  renameData,
  renameDataArray,
  renameOrder,
  renamePk,
  renameSelect,
  renameWhere,
} from "@er/utils/src/rename-fields";

import { TConnections, TDbs } from "../dal/connections";
import { isData } from "../lib/is-data";
import { isId } from "../lib/is-id";
import { isLimit } from "../lib/is-limit";
import { isOrder } from "../lib/is-order";
import { isSelect } from "../lib/is-select";
import { isWhere } from "../lib/is-where";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";
import { pksFromSchema } from "../lib/pksFromSchema";
import { validateThrow } from "../lib/validate-throw";
import { entitySchema } from "../schema";

export class Entity<Rec> {
  entity: TEntity;
  knex;
  table;
  fields;
  pks: Pks<Rec>;
  fieldList: (keyof Rec)[];
  nameList: (keyof Rec)[];

  constructor(connections: TConnections, entityName: keyof TEntitySchema) {
    if (!Object.hasOwn(entitySchema, entityName))
      throw new Error(`${entityName} não é uma entidade cadastrada no schema`);
    this.entity = entitySchema[entityName] as TEntity;
    this.knex = connections[this.entity.database as TDbs];
    this.table = this.entity.table;
    this.pks = pksFromSchema<Rec>(this.entity.fields);
    this.fields = this.entity.fields;
    this.fieldList = this.fields.map(
      (fld: SchemaField) => fld.field
    ) as (keyof Rec)[];
    this.nameList = this.fields.map(
      (fld: SchemaField) => fld.name
    ) as (keyof Rec)[];
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
  }: ListArgs<Rec> = {}): Promise<Rec[]> {
    validateThrow(isOrder(order, this.nameList));
    validateThrow(isWhere(where, this.nameList));
    validateThrow(isLimit(limit));
    validateThrow(isSelect(select, this.nameList));

    const data: Rec[] = await this.knex(this.table)
      .select(renameSelect(select, this.nameList, this.fieldList))
      .limit(limit)
      .where(knexWhere(renameWhere(where, this.nameList, this.fieldList)))
      .orderBy(knexOrder(renameOrder(order, this.nameList, this.fieldList)));
    return renameDataArray<Rec>(data, this.fieldList, this.nameList);
  }

  // READ
  async read({ id, select = this.nameList }: ReadArgs<Rec>): Promise<Rec> {
    validateThrow(isId(id, this.pks));
    validateThrow(isSelect(select, this.nameList));

    const data = await this.knex(this.table)
      .select(renameSelect(select, this.nameList, this.fieldList))
      .where(renamePk(id, this.nameList, this.fieldList));

    const [rec] = renameDataArray<Rec>(data, this.fieldList, this.nameList);
    return rec || ({} as Rec);
  }

  // DEL
  async del({ id }: DelArgs<Rec>): Promise<number> {
    validateThrow(isId(id, this.pks));

    const qry = await this.knex(this.table)
      .del()
      .where(renamePk(id, this.nameList, this.fieldList));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  }

  // CREATE
  async create({ data }: CreateArgs<Rec>): Promise<Rec> {
    validateThrow(isData(data, this.nameList));

    const [qry] = await this.knex(this.table)
      .insert(renameData(data, this.nameList, this.fieldList))
      .returning(this.fieldList as any);
    return renameData<Rec>(qry, this.fieldList, this.nameList);
  }

  // UPDATE
  async update({ id, data }: UpdateArgs<Rec>): Promise<Rec> {
    validateThrow(isId(id, this.pks));
    validateThrow(isData(data, this.nameList));

    const qry = await this.knex(this.table)
      .update(renameData(data, this.nameList, this.fieldList))
      .where(renamePk(id, this.nameList, this.fieldList))
      .returning(this.fieldList as any);
    return renameData<Rec>(qry[0], this.fieldList, this.nameList);
  }
}
