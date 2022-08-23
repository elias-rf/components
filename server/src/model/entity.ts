import type {
  Ids,
  Order,
  Pks,
  Schema,
  SchemaField,
  TEntity,
  TEntitySchema,
  Where,
} from "@er/types";

import {
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "@er/utils/src";

import {
  renameData,
  renameDataArray,
  renameOrder,
  renamePk,
  renameSelect,
  renameWhere,
} from "@er/utils/src/rename-fields";

import { TConnections, TDbs } from "../dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";
import { entitySchema } from "../schema";

function validatorPks<Rec>(pk: Pks<Rec>, id: Ids<Rec>) {
  if (typeof pk !== "object") throw new Error("Pk inválido use um objeto");

  const pks = Object.keys(pk);
  if (
    Array.isArray(pks) &&
    Array.isArray(id) &&
    pks.length === id.length &&
    pks.every((val, index) => val === id[index])
  )
    return;
  throw new Error(`Pk inválido use ${id}`);
}

export class EntityModel<Rec> {
  entity: TEntity<Rec>;
  knex;
  table;
  fields;
  id;
  fieldList;
  nameList;

  constructor(connections: TConnections, entityName: keyof TEntitySchema<Rec>) {
    this.entity = entitySchema[entityName] as TEntity<Rec>;
    this.knex = connections[this.entity.database as TDbs];
    this.table = this.entity.table;
    this.id = this.entity.id;
    this.fields = this.entity.fields;
    this.fieldList = this.fields.map((fld: SchemaField) => fld.field);
    this.nameList = this.fields.map((fld: SchemaField) => fld.name);
  }

  // SCHEMA
  async schema(): Promise<Schema<Rec>> {
    return { id: this.id, fields: this.fields };
  }

  // LIST
  async list(
    where: Where<Rec>[] = [],
    order: Order<Rec>[] = [],
    limit = 50,
    select = this.fieldList
  ): Promise<Rec[]> {
    validator(where, "where", whereSchema);
    validator(order, "orderBy", orderBySchema);
    validator(limit, "limit", limitSchema);

    const data: Rec[] = await this.knex(this.table)
      .select(
        renameSelect(select || this.fieldList, this.nameList, this.fieldList)
      )
      .limit(limit)
      .where(knexWhere(renameWhere(where, this.nameList, this.fieldList)))
      .orderBy(knexOrder(renameOrder(order, this.nameList, this.fieldList)));
    return renameDataArray<Rec>(data, this.fieldList, this.nameList);
  }

  /**
   * READ
   * @param id Array com chave primária
   * @param select Array com campos para retornar
   * @returns Objeto com registro
   */
  async read(pk: Pks<Rec>, select = this.fieldList): Promise<Rec> {
    validatorPks(pk, this.id);
    const data = await this.knex(this.table)
      .select(renameSelect(select, this.nameList, this.fieldList))
      .where(renamePk(pk, this.nameList, this.fieldList));

    const [rec] = renameDataArray<Rec>(data, this.fieldList, this.nameList);
    return rec || ({} as Rec);
  }

  // DEL
  async del(pk: Pks<Rec>): Promise<number> {
    validatorPks(pk, this.id);
    const qry = await this.knex(this.table)
      .del()
      .where(renamePk(pk, this.nameList, this.fieldList));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  }

  // CREATE
  async create(data: Rec): Promise<Rec> {
    validator(data, "data", recordSchema);

    const [qry] = await this.knex(this.table)
      .insert(renameData(data, this.nameList, this.fieldList))
      .returning(this.fieldList);
    return renameData<Rec>(qry, this.fieldList, this.nameList);
  }

  // UPDATE
  async update(pk: Pks<Rec>, data: Rec): Promise<Rec> {
    validatorPks(pk, this.id);
    validator(data, "data", recordSchema);

    const qry = await this.knex(this.table)
      .update(renameData(data, this.nameList, this.fieldList))
      .where(renamePk(pk, this.nameList, this.fieldList))
      .returning(this.fieldList);
    return renameData<Rec>(qry[0], this.fieldList, this.nameList);
  }
}
