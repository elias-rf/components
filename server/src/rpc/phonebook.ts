import { Connections } from "dal/connections";
import type { CurrentUser, ListArgs } from "../../../types";
import { Id } from "../../../types";
import { idSchema, idToWhere, recordSchema, validator } from "../../../utils";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  id?: string;
  name?: string;
  department?: string;
  email?: string;
};

export function Phonebook(connections: Connections) {
  const knexOftalmo = connections.oftalmo;
  const table = "phonebook";
  const pk = ["id"];
  return {
    async phonebookSchema() {
      return {
        pk: ["id"],
        fields: [
          {
            field: "id",
            label: "Ramal",
            type: "ID",
          },
          {
            field: "name",
            label: "Nome",
            type: "string",
          },
          {
            field: "department",
            label: "Setor",
            type: "string",
          },
          {
            field: "email",
            label: "Email",
            type: "string",
          },
        ],
      };
    },
    // LIST
    async phonebookList(
      { where = [], orderBy = [], limit = 50 }: ListArgs,
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record[]> {
      const qry = await knexOftalmo(table)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
      return qry;
    },

    // READ
    async phonebookRead(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record> {
      validator(id, "id", idSchema);
      const qry = await knexOftalmo(table).where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return {};
    },

    // DEL
    async phonebookDel(
      { id }: { id: Id },
      ctx?: { currentUser: CurrentUser }
    ): Promise<number> {
      validator(id, "id", idSchema);
      const qry = await knexOftalmo(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async phonebookCreate(
      { rec }: { rec: Record },
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record> {
      validator(rec, "rec", recordSchema);
      const qry: Record = await knexOftalmo(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async phonebookUpdate(
      {
        id,
        rec,
      }: {
        id: Id;
        rec: Record;
      },
      ctx?: { currentUser: CurrentUser }
    ): Promise<Record> {
      validator(id, "id", idSchema);
      validator(rec, "rec", recordSchema);
      const qry: Record = await knexOftalmo(table)
        .update(rec)
        .where(idToWhere(pk, id))
        .returning(pk);
      return qry;
    },
  };
}
