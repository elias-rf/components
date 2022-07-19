import { Connections } from "dal/connections";
import {
  GenericObject,
  OrderBy,
  RpcContext,
  Schema,
  Where,
} from "../../../types";
import {
  idSchema,
  idToWhere,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "../../../utils";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Id = string[];
type Record = {
  kUsuario: string;
  nome: string;
  NomeUsuario: string;
  idGroup: string;
  Ativo: string;
};

export function Usuario(connections: Connections) {
  const knexOftalmo = connections.oftalmo;
  const table = "tbl_seguranca_usuario";
  const pk = "kUsuario";

  return {
    async schema(): Promise<Schema> {
      return {
        pk: ["kUsuario"],
        fields: [
          {
            field: "kUsuario",
            label: "Código do usuário",
            type: "ID",
          },
          {
            field: "NomeUsuario",
            label: "Login",
            type: "string",
          },
          {
            field: "idGroup",
            label: "Grupo de segurança",
            type: "string",
          },
          {
            field: "Ativo",
            label: "Cadastro ativo",
            type: "boolean",
          },
          {
            field: "nome",
            label: "Nome",
            type: "string",
          },
        ],
      };
    },
    // LIST
    async usuarioList(
      {
        where,
        orderBy,
        limit = 50,
      }: {
        where?: Where[];
        orderBy?: OrderBy[];
        limit?: number;
      },
      ctx?: RpcContext
    ): Promise<GenericObject[]> {
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
    async usuarioRead(
      { id }: { id: Id },
      ctx?: RpcContext
    ): Promise<GenericObject> {
      validator(id, "id", idSchema);
      const qry = await knexOftalmo(table).where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // DEL
    async usuarioDel({ id }: { id: Id }, ctx?: RpcContext): Promise<number> {
      validator(id, "id", idSchema);
      const qry = await knexOftalmo(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async usuarioCreate(
      { rec }: { rec: Record },
      ctx?: RpcContext
    ): Promise<string[]> {
      validator(rec, "rec", recordSchema);
      const qry = await knexOftalmo(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async usuarioUpdate(
      {
        id,
        rec,
      }: {
        id: Id;
        rec: Record;
      },
      ctx?: RpcContext
    ): Promise<any> {
      validator(id, "id", idSchema);
      validator(rec, "rec", recordSchema);

      const qry = await knexOftalmo(table)
        .update(rec)
        .where(idToWhere(pk, id))
        .returning(pk);
      return qry;
    },
  };
}
