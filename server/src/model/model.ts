import { Knex } from "knex";
import type { Id, OrderBy, Where } from "../../../types";
import {
  idSchema,
  idToWhere,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "../../../utils/src";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

export class Model<Record> {
  _knex: Knex;
  name: string;
  table: string;
  pk: Id;
  select: string[];

  constructor(
    connection: Knex,
    name: string,
    table: string,
    pk: Id,
    select: string[] = ["*"]
  ) {
    this._knex = connection;
    this.name = name;
    this.table = table;
    this.pk = pk;
    this.select = select;
  }

  // LIST
  async list(
    where: Where[] = [],
    orderBy: OrderBy[] = [],
    limit: number = 50,
    select?: string[]
  ): Promise<Record[]> {
    validator(where, "where", whereSchema);
    validator(orderBy, "orderBy", orderBySchema);
    validator(limit, "limit", limitSchema);

    return this._knex(this.table)
      .select(select || this.select)
      .limit(limit)
      .where(knexWhere(where))
      .orderBy(knexOrder(orderBy));
  }

  // READ
  async read(id: Id, select?: string[]): Promise<Record> {
    validator(id, "id", idSchema);

    const qry = await this._knex(this.table)
      .select(select || this.select)
      .where(idToWhere(this.pk, id));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0] as Record;
    }
    return qry[0] as Record;
  }

  // DEL
  async del(id: Id): Promise<number> {
    validator(id, "id", idSchema);

    const qry = await this._knex(this.table)
      .del()
      .where(idToWhere(this.pk, id));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  }

  // CREATE
  async create(data: Record): Promise<Id> {
    validator(data, "data", recordSchema);

    const qry = await this._knex(this.table).insert(data).returning(this.pk);
    return qry;
  }

  // UPDATE
  async update(id: Id, data: Record): Promise<Id> {
    validator(id, "id", idSchema);
    validator(data, "data", recordSchema);

    const qry = await this._knex(this.table)
      .update(data)
      .where(idToWhere(this.pk, id))
      .returning(this.pk);
    return qry;
  }
}
