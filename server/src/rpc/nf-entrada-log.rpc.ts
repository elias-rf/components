import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { Connections } from "../dal/connections";
import {
  NfEntradaLogModel,
  NfEntradaLogRecord,
} from "../model/plano/nf-entrada-log.model";

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
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaLogRecord[]>;
  nfEntradaLogRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaLogRecord>;
  nfEntradaLogDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaLogCreate: (
    createArgs: CreateArgs<NfEntradaLogRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaLogUpdate: (
    { id, data }: UpdateArgs<NfEntradaLogRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function NfEntradaLog(connections: Connections): NfEntradaLogRpc {
  const nfEntradaLog = new NfEntradaLogModel(connections);

  return {
    // LIST
    async nfEntradaLogList(
      { where = [], orderBy = [], limit = 50, select },
      ctx
    ): Promise<NfEntradaLogRecord[]> {
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
