import { TConnection } from "../../types";
import { knexOrder } from "../data/knex-order";
import { knexWhere } from "../data/knex-where";
import { getNames } from "./get-nasmes";
import { renameFieldToName, renameNameToField } from "./rename-fields";

export type TKormModel = {
  connection: TConnection;
  table: string;
  fields: Record<string, string>;
};

type TOrder<Fields = string> = [Fields, "asc" | "desc"];
type TSelect<Fields = string> = Fields[];
type TWhere<Fields = string> = [Fields, string, any];
type TAggregate<Fields = string> = { [fieldName: string]: Fields };
type TIds = { [fields: string]: any };

type TListArgs = {
  limit?: number;
  where?: TWhere[];
  order?: TOrder[];
  select?: TSelect;
  sum?: TAggregate;
  min?: TAggregate;
  max?: TAggregate;
  group?: TSelect;
};

export function kormFactory(kormModel: TKormModel) {
  const orm = {
    connection: kormModel.connection,
    table: kormModel.table,
    fields: kormModel.fields,
    list({
      where = [],
      order = [],
      limit = 50,
      select = [],
      group = [],
      sum = {},
      min = {},
      max = {},
    }: TListArgs = {}) {
      const fields = this.fields;
      const conn = this.connection;
      const table = this.table;

      if (select.length === 0) {
        select = getNames(fields);
      }

      let qry = conn(table);

      if (select) {
        qry = qry.select(renameNameToField(select, fields));
      }

      if (limit) qry = qry.limit(limit);
      if (where.length > 0)
        qry = qry.where(knexWhere(renameNameToField(where, fields)));
      if (order.length > 0)
        qry = qry.orderBy(knexOrder(renameNameToField(order, fields)));
      if (Object.keys(sum).length > 0) qry = qry.sum(sum);
      if (Object.keys(min).length > 0) qry = qry.min(min);
      if (Object.keys(max).length > 0) qry = qry.max(max);
      if (group.length > 0) qry = qry.groupBy(renameNameToField(group, fields));

      return {
        async exec(): Record<string, any> {
          const data = await qry;
          return renameFieldToName(data, fields);
        },
        sql() {
          return qry.toString();
        },
      };
    },
    create({
      data,
      select = [],
    }: {
      data: Record<string, any>;
      select?: TSelect;
    }) {
      const fields = this.fields;
      const conn = this.connection;
      const table = this.table;

      if (select.length === 0) {
        select = getNames(fields);
      }

      const qry = conn(table)
        .insert(renameNameToField(data, fields))
        .returning(renameNameToField(select, fields) as any);

      return {
        async exec() {
          const data = await qry;
          return renameFieldToName(data, fields);
        },
        sql() {
          return qry.toString();
        },
      };
    },
    read({ id, select = [] }: { id: TIds; select?: TSelect }) {
      const fields = this.fields;
      const conn = this.connection;
      const table = this.table;

      if (select.length === 0) {
        select = getNames(fields);
      }

      let qry = conn(table).where(renameNameToField(id, fields));
      if (select) qry = qry.first(renameNameToField(select, fields));

      return {
        async exec() {
          const data = await qry;
          return renameFieldToName(data, fields);
        },
        sql() {
          return qry.toString();
        },
      };
    },
    update({
      id,
      data,
      select = [],
    }: {
      id: TIds;
      data: Record<string, any>;
      select?: TSelect;
    }) {
      const fields = this.fields;
      const conn = this.connection;
      const table = this.table;
      if (select.length === 0) {
        select = getNames(fields);
      }

      const qry = conn(table)
        .update(renameNameToField(data, fields))
        .where(renameNameToField(id, fields))
        .returning(renameNameToField(select, fields) as any);

      return {
        async exec() {
          const data = await qry;
          return renameFieldToName(data, fields);
        },
        sql() {
          return qry.toString();
        },
      };
    },
    del({ id }: { id: TIds }) {
      const fields = this.fields;
      const conn = this.connection;
      const table = this.table;

      const qry = conn(table).del().where(renameNameToField(id, fields));
      return {
        async exec() {
          const data = await qry;
          return renameFieldToName(data, fields);
        },
        sql() {
          return qry.toString();
        },
      };
    },
  };
  return orm;
}
