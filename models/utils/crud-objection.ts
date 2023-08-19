import { ModelBase } from "@/database/utils/model-base";
import {
  TCountArgs,
  TCreateArgs,
  TDelArgs,
  TGenericObject,
  TIncrementArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "@/types";
import { objectionOrder } from "@/models/utils/objection-order";
import { objectionWhere } from "@/models/utils/objection-where";
import { isEmpty } from "@/utils/identify/is-empty";
import autoBind from "auto-bind";

export class CrudObjection {
  table: typeof ModelBase; // Objection.Model

  constructor(table: any) {
    autoBind(this);
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
  }: TListArgs = {}): Promise<any[]> {
    this.table.assertSelect(select);
    this.table.assertFilter(filter);
    this.table.assertSort(sort);

    let qry = this.table.query();
    if (select) qry = qry.select(select);
    if (limit) qry = qry.limit(limit);
    if (!isEmpty(filter)) qry = qry.where(objectionWhere(filter));
    if (!isEmpty(sort)) {
      qry = qry.orderBy(objectionOrder(sort));
    }
    if (sum) {
      qry = qry.sum( sum );
    }
    if (min) {
      qry = qry.sum(min);
    }
    if (max) {
      qry = qry.max(max);
    }

    if (group.length > 0) qry = qry.groupBy(group);

    const data = await qry;
    return data;
  }

  async read({ id, select = [] }: TReadArgs): Promise<any> {
    this.table.assertId(id);
    this.table.assertSelect(select);
    let qry = this.table.query().findById(this.table.getIdArray(id));

    if (select) qry = qry.select(select);

    const data = await qry;
    const rec = data;
    return rec || ({} as TGenericObject);
  }

  async count({ filter = {}, count = { ttl: "*" }, select }: TCountArgs) {
    this.table.assertFilter(filter);
    this.table.assertSelect(select);
    let qry = this.table.query().where(objectionWhere(filter)).count(count);
    if (select) qry = qry.select(select);
    const data = await qry;
    return data;
  }

  async update({ id, data, select }: TUpdateArgs): Promise<TGenericObject> {
    this.table.assertId(id);
    this.table.assertData(data);
    this.table.assertSelect(select);

    let qry = this.table.query() as any;
    if (select) {
      qry = qry
        .select(select)
        .patchAndFetchById(this.table.getIdArray(id), data);
    } else {
      qry = qry.findById(this.table.getIdArray(id)).patch(data);
    }

    return qry;
  }

  async create({ data, select }: TCreateArgs) {
    this.table.assertData(data);
    this.table.assertSelect(select);

    let qry: any = this.table.query();
    if (select === undefined) {
      qry = qry.insert(data);
    } else {
      qry = qry.select(select).insertAndFetch(data);
    }

    return qry;
  }

  async del({ id }: TDelArgs): Promise<number> {
    this.table.assertId(id);
    return this.table.query().deleteById(this.table.getIdArray(id));
  }

  async increment({
    filter = {},
    increment,
    select,
  }: TIncrementArgs): Promise<TGenericObject[]> {
    this.table.assertFilter(filter);
    this.table.assertSelect(select);
    const inc = increment;

    let qry = this.table
      .query()
      .where(objectionWhere(filter))
      .increment(Object.keys(inc)[0], Object.values(inc)[0]);

    if (select !== undefined) {
      qry = qry.returning(select);
    }
    return qry;
  }
}
