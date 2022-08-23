import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../dal/connections";
import { NfEntradaLogModel, TNfEntradaLog } from "../model";

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

export interface TNfEntradaLogRpc {
  nfEntradaLogList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntradaLog[]>;
  nfEntradaLogRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntradaLog>;
  nfEntradaLogDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaLogCreate: (
    createArgs: CreateArgs<TNfEntradaLog>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaLogUpdate: (
    { id, data }: UpdateArgs<TNfEntradaLog>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function nfEntradaLogRpc(connections: TConnections): TNfEntradaLogRpc {
  const nfEntradaLog = new NfEntradaLogModel(connections);

  return {
    // LIST
    async nfEntradaLogList(
      { where = [], orderBy = [], limit = 50, select },
      ctx
    ): Promise<TNfEntradaLog[]> {
      return nfEntradaLog.list(where, orderBy, limit, select);
    },

    // READ
    async nfEntradaLogRead({ id, select }) {
      return nfEntradaLog.read(id, select);
    },

    // DEL
    async nfEntradaLogDel({ id }) {
      return nfEntradaLog.del(id);
    },

    // CREATE
    async nfEntradaLogCreate({ data }) {
      return nfEntradaLog.create(data);
    },

    // UPDATE
    async nfEntradaLogUpdate({ id, data }) {
      return nfEntradaLog.update(id, data);
    },
  };
}
