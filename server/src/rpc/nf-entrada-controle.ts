import {
  Id,
  RpcContext,
  RpcCreateArgs,
  RpcDelArgs,
  RpcListArgs,
  RpcReadArgs,
  RpcUpdateArgs,
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
import { Connections } from "../dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  CdFilial?: string;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: string;
  CdProduto?: string;
  NumLote?: string;
  Quantidade?: string;
};

export interface NfEntradaControleRpc {
  nfEntradaControleList: (
    listArgs: RpcListArgs,
    ctx?: RpcContext
  ) => Promise<Record[]>;
  nfEntradaControleRead: (
    readArgs: RpcReadArgs,
    ctx?: RpcContext
  ) => Promise<Record>;
  nfEntradaControleDel: (
    delArgs: RpcDelArgs,
    ctx?: RpcContext
  ) => Promise<number>;
  nfEntradaControleCreate: (
    createArgs: RpcCreateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaControleUpdate: (
    { id, rec }: RpcUpdateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function NfEntradaControle(
  connections: Connections
): NfEntradaControleRpc {
  const knexPlano = connections.plano;
  const table = "LotesNotaEntrada";
  const pk = ["CdFilial", "NumNota", "Serie", "Modelo"];
  const select = [
    "CdFilial",
    "NumNota",
    "Serie",
    "Modelo",
    "CdFornecedor",
    "CdProduto",
    "NumLote",
    "Quantidade",
  ];
  return {
    // LIST
    async nfEntradaControleList(
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
    async nfEntradaControleRead(
      { id }: RpcReadArgs,
      ctx?: RpcContext
    ): Promise<Record> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table)
        .select(select)
        .where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry as unknown as Record;
    },

    // DEL
    async nfEntradaControleDel(
      { id }: RpcDelArgs,
      ctx?: RpcContext
    ): Promise<number> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async nfEntradaControleCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async nfEntradaControleUpdate(
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
