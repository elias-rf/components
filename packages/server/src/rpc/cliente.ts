import type {
  Id,
  RpcContext,
  RpcCreateArgs,
  RpcDelArgs,
  RpcListArgs,
  RpcReadArgs,
  RpcUpdateArgs,
  Schema,
} from "@vt/types";
import {
  idSchema,
  idToWhere,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "@vt/utils";
import type { Connections } from "../dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  CdCliente?: string;
  RzSocial?: string;
  Cidade?: string;
  Uf?: string;
  CGC?: string;
  CdVendedor?: string;
  FgAtivo?: string;
};

export interface ClienteRpc {
  clienteSchema: () => Promise<Schema>;
  clienteList: (listArgs: RpcListArgs, ctx?: RpcContext) => Promise<Record[]>;
  clienteRead: (readArgs: RpcReadArgs, ctx?: RpcContext) => Promise<Record>;
  clienteDel: (delArgs: RpcDelArgs, ctx?: RpcContext) => Promise<number>;
  clienteCreate: (
    createArgs: RpcCreateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
  clienteUpdate: (
    { id, rec }: RpcUpdateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function Cliente(connections: Connections): ClienteRpc {
  const knexPlano = connections.plano;
  const table = "CadCli";
  const pk = ["CdCliente"];
  const select = [
    "CdCliente",
    "RzSocial",
    "Cidade",
    "Uf",
    "CGC",
    "CdVendedor",
    "FgAtivo",
  ];

  return {
    // SCHEMA
    async clienteSchema() {
      return {
        pk: ["CdCliente"],
        fields: [
          {
            field: "CdCliente",
            label: "Código",
            type: "ID",
          },
          {
            field: "RzSocial",
            label: "Nome",
            type: "string",
          },
          {
            field: "Cidade",
            label: "Cidade",
            type: "string",
          },
          {
            field: "Uf",
            label: "UF",
            type: "string",
          },
          {
            field: "CGC",
            label: "CNPJ",
            type: "string",
          },
          {
            field: "CdVendedor",
            label: "Cód Vendedor",
            type: "string",
          },
          {
            field: "FgAtivo",
            label: "Ativo",
            type: "string",
          },
        ],
      };
    },

    // LIST
    async clienteList(
      { where = [], orderBy = [], limit = 50 }: RpcListArgs,
      ctx?: RpcContext
    ): Promise<Record[]> {
      validator(where, "where", whereSchema);
      validator(orderBy, "orderBy", orderBySchema);
      validator(limit, "limit", limitSchema);

      return knexPlano(table)
        .select(select)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
    },

    // READ
    async clienteRead({ id }: RpcReadArgs, ctx?: RpcContext): Promise<Record> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table)
        .select(select)
        .where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry as Record;
    },

    // DEL
    async clienteDel({ id }: RpcDelArgs, ctx?: RpcContext): Promise<number> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async clienteCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async clienteUpdate(
      { id, rec }: RpcUpdateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(id, "id", idSchema);
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table)
        .update(rec)
        .where(idToWhere(pk, id))
        .returning(pk);
      return qry;
    },
  };
}
