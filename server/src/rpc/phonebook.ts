import { Connections } from "dal/connections";
import type { CurrentUser, ListArgs } from "../..";
import { Id } from "../../../index.d";
import knexOrder from "../lib/knex/knex-order";
import knexWhere from "../lib/knex/knex-where";

type Record = {
  id?: string;
  name?: string;
  department?: string;
  email?: string;
};

export default function phonebook(connections: Connections) {
  const knexOftalmo = connections.oftalmo;
  const table = "phonebook";
  const pk = ["id"];
  return {
    async list(
      { where, orderBy, limit = 50 }: ListArgs,
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record[]> {
      const qry = await knexOftalmo(table)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
      return qry;
    },

    async read(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[id] is required");
      }
      const qry = await knexOftalmo(table).where(pk[0], id[0]);
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return {};
    },

    async del(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ): Promise<number> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[id] is required");
      }
      const qry = await knexOftalmo(table).del().where(pk[0], id[0]);
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    async create(
      { rec }: { rec: Record },
      ctx?: { currentUser: CurrentUser }
    ): Promise<string[]> {
      const qry = await knexOftalmo(table)
        .insert(rec)
        .returning([...pk]);
      return qry;
    },

    async update(
      {
        id,
        rec,
      }: {
        id: Id;
        rec: Record;
      },
      ctx?: { currentUser: CurrentUser }
    ): Promise<any> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[id] is required");
      }
      const qry = await knexOftalmo(table)
        .update(rec)
        .where(pk[0], id[0])
        .returning([...pk]);
      return qry;
    },
  };
}
