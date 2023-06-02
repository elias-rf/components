import {
  TAggregate,
  TCountArgs,
  TCreateArgs,
  TDelArgs,
  TGenericObject,
  TIncrementArgs,
  TListArgs,
  TReadArgs,
  TSelect,
  TTableDef,
  TUpdateArgs,
} from "@/types";
import { knexAggregate } from "@/utils/api/knex-aggregate";
import { knexData } from "@/utils/api/knex-data";
import { knexId } from "@/utils/api/knex-id";
import { knexIncrement } from "@/utils/api/knex-increment";
import { knexOrder } from "@/utils/api/knex-order";
import { knexSelect } from "@/utils/api/knex-select";
import { knexWhere } from "@/utils/api/knex-where";
import { assertAggregate } from "@/utils/asserts/assert-aggregate";
import { assertData } from "@/utils/asserts/assert-data";
import { assertFilter } from "@/utils/asserts/assert-filter";
import { assertId } from "@/utils/asserts/assert-id";
import { assertLimit } from "@/utils/asserts/assert-limit";
import { assertSelect } from "@/utils/asserts/assert-select";
import { assertSort } from "@/utils/asserts/assert-sort";
import { isEmpty } from "@/utils/identify/is-empty";
import { namesFromTable } from "@/utils/schema/names-from-table";
import { recordClear } from "@/utils/schema/record-clear";
import {
  renameFieldToName,
  renameNameToField,
} from "@/utils/schema/rename-fields";
import autoBind from "auto-bind";
import { Knex } from "knex";

export class CrudModel<T = TGenericObject> {
  connection: Knex;
  table: TTableDef;

  constructor(connection: Knex, table: TTableDef) {
    autoBind(this);
    this.connection = connection;
    this.table = table;
  }

  async list({
    filter = {},
    sort = {},
    limit = 50,
    select = ["*"],
    group = [],
    sum,
    min,
    max,
  }: TListArgs = {}): Promise<T[]> {
    // valida parametros
    assertLimit(limit);
    assertFilter(filter, this.table.fields);
    assertSort(sort, this.table.fields);
    assertSelect(select as string[], this.table.fields);
    assertSelect(group as string[], this.table.fields);

    let qry = this.connection(this.table.table);
    if (select) qry = qry.select(knexSelect(select, this.table.fields));
    if (limit) qry = qry.limit(limit);
    if (!isEmpty(filter)) qry = qry.where(knexWhere(filter, this.table.fields));
    if (!isEmpty(sort)) qry = qry.orderBy(knexOrder(sort, this.table.fields));
    if (sum) {
      assertAggregate(sum as TAggregate, this.table.fields);
      qry = qry.sum(knexAggregate(sum, this.table.fields));
    }
    if (min) {
      assertAggregate(min as TAggregate, this.table.fields);
      qry = qry.sum(knexAggregate(min, this.table.fields));
    }
    if (max) {
      assertAggregate(max as TAggregate, this.table.fields);
      qry = qry.max(knexAggregate(max, this.table.fields));
    }

    if (group.length > 0)
      qry = qry.groupBy(renameNameToField(group, this.table.fields));

    const data = await qry;
    return renameFieldToName(data, this.table.fields);
  }

  async read({ id, select = [] }: TReadArgs): Promise<T> {
    assertId(id, this.table.fields);
    assertSelect(select as string[], this.table.fields);

    if (select.length === 0) {
      select = namesFromTable(this.table);
    }

    const tbl = this.table.table;
    let qry = this.connection(tbl).where(knexId(id, this.table.fields));
    if (select) qry = qry.select(renameNameToField(select, this.table.fields));

    const data = await qry;
    const [rec] = renameFieldToName(data, this.table.fields);
    return rec || ({} as TGenericObject);
  }

  async count({ filter = {}, count = { ttl: "*" }, select }: TCountArgs) {
    assertFilter(filter, this.table.fields);

    let qry = this.connection(this.table.table)
      .where(knexWhere(filter, this.table.fields))
      .count(count);
    if (select) qry = qry.select(renameNameToField(select, this.table.fields));
    const data = await qry;
    return data;
  }

  async clear(): Promise<TGenericObject> {
    return recordClear(this.table.fields);
  }

  async update({
    id,
    data,
    select = ["*"],
  }: TUpdateArgs): Promise<TGenericObject> {
    assertId(id, this.table.fields);
    assertData(data, this.table.fields);
    assertSelect(select as TSelect, this.table.fields);

    let qry = this.connection(this.table.table);
    if (select) qry = qry.select(knexSelect(select, this.table.fields));

    qry = qry
      .update(renameNameToField(data, this.table.fields))
      .where(knexId(id, this.table.fields))
      .returning(knexSelect(select, this.table.fields));
    const resp = await qry;
    return renameFieldToName(resp[0], this.table.fields);
  }

  async create({ data, select = [] }: TCreateArgs) {
    assertData(data, this.table.fields);
    assertSelect(select as TSelect, this.table.fields);

    if (select.length === 0) {
      select = namesFromTable(this.table);
    }

    const [qry] = await this.connection(this.table.table)
      .insert(knexData(data, this.table.fields))
      .returning(knexSelect(select, this.table.fields) as any);

    return renameFieldToName(qry, this.table.fields);
  }

  async del({ id }: TDelArgs): Promise<number> {
    assertId(id, this.table.fields);

    const tbl = this.table.table;

    const qry = await this.connection(tbl)
      .del()
      .where(knexId(id, this.table.fields));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  }

  async increment({
    filter = {},
    increment,
    select = [],
  }: TIncrementArgs): Promise<TGenericObject[]> {
    assertFilter(filter, this.table.fields);
    assertSelect(select as string[], this.table.fields);

    if (select.length === 0) {
      select = namesFromTable(this.table);
    }

    const inc = knexIncrement(increment, this.table.fields);

    const data: TGenericObject[] = await this.connection(this.table.table)
      .where(knexWhere(filter, this.table.fields))
      .increment(...inc)
      .returning(knexSelect(select, this.table.fields));

    return renameFieldToName(data, this.table.fields);
  }
}
