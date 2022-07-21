import { Connections } from "dal/connections";
import { Id, ListArgs, Schema } from "../../../types";
import {
  idSchema,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "../../../utils";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  idSubject?: string;
  idGroup?: string;
};

export interface PermissaoRpc {
  permissaoSchema(): Promise<Schema>;
  permissaoList(listArgs: ListArgs): Promise<Record[]>;
  permissaoRead({ id }: { id: Id }): Promise<Record>;
  permissaoDel({ id }: { id: Id }): Promise<number>;
  permissaoCreate({ rec }: { rec: Record }): Promise<string[]>;
  permissaoUpdate({ id, rec }: { id: Id; rec: Record }): Promise<any>;
}

export function Permissao(connections: Connections): PermissaoRpc {
  const knexOftalmo = connections.oftalmo;
  const table = "groupSubject";
  const pk = ["idSubject", "idGroup"];

  return {
    async permissaoSchema() {
      return {
        pk: ["idSubject", "idGroup"],
        fields: [
          {
            field: "idSubject",
            label: "Permissão",
            type: "ID",
          },
          {
            field: "idGroup",
            label: "Grupo",
            type: "ID",
          },
        ],
      };
    },
    // LIST
    async permissaoList({
      where,
      orderBy,
      limit = 1000,
    }: ListArgs): Promise<Record[]> {
      validator(where, "where", whereSchema);
      validator(orderBy, "orderBy", orderBySchema);
      validator(limit, "limit", limitSchema);

      const qry = await knexOftalmo(table)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
      return qry;
    },

    // READ
    async permissaoRead({ id }: { id: Id }): Promise<Record> {
      validator(id, "id", idSchema);
      const qry = await knexOftalmo(table)
        .where(pk[0], id[0])
        .where(pk[1], id[1]);
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return {};
    },

    // DEL
    async permissaoDel({ id }: { id: Id }): Promise<number> {
      validator(id, "id", idSchema);
      const qry = await knexOftalmo(table)
        .del()
        .where(pk[0], id[0])
        .where(pk[1], id[1]);
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async permissaoCreate({ rec }: { rec: Record }): Promise<string[]> {
      validator(rec, "rec", recordSchema);
      const qry = await knexOftalmo(table)
        .insert(rec)
        .returning([...pk]);
      return qry;
    },

    // UPDATE
    async permissaoUpdate({ id, rec }: { id: Id; rec: Record }): Promise<any> {
      validator(rec, "rec", recordSchema);
      validator(id, "id", idSchema);
      const qry = await knexOftalmo(table)
        .update(rec)
        .where(pk[0], id[0])
        .where(pk[1], id[1])
        .returning([...pk]);
      return qry;
    },
  };
}
