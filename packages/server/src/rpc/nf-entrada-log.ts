import {
  Id,
  RpcContext,
  RpcCreateArgs,
  RpcDelArgs,
  RpcListArgs,
  RpcReadArgs,
  RpcUpdateArgs,
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
import { Connections } from "../dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  CdFilial?: number;
  NumNota?: string;
  Serie?: string;
  Modelo: string;
  CdFornecedor?: number;
  Data?: string;
  Usuario?: string;
  Operacao: string;
};

export interface NfEntradaLogRpc {
  nfEntradaLogList: (
    listArgs: RpcListArgs,
    ctx?: RpcContext
  ) => Promise<Record[]>;
  nfEntradaLogRead: (
    readArgs: RpcReadArgs,
    ctx?: RpcContext
  ) => Promise<Record>;
  nfEntradaLogDel: (delArgs: RpcDelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaLogCreate: (
    createArgs: RpcCreateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaLogUpdate: (
    { id, rec }: RpcUpdateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function NfEntradaLog(connections: Connections): NfEntradaLogRpc {
  const knexPlano = connections.plano;
  const table = "NfLogConferencia";
  const pk = ["CdFilial", "NumNota", "Serie", "Modelo"];
  const select = [
    "CdFilial",
    "NumNota",
    "Serie",
    "Modelo",
    "CdFornecedor",
    "Data",
    "Usuario",
    "Operacao",
  ];
  return {
    // LIST
    async nfEntradaLogList(
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
    async nfEntradaLogRead(
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
    async nfEntradaLogDel(
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
    async nfEntradaLogCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async nfEntradaLogUpdate(
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
