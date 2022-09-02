import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../dal/connections";
import { NfEntradaLogModel, TNfEntradaLog } from "../model";

export interface TNfEntradaLogRpc {
  nfEntradaLogList: (
    listArgs: ListArgs<TNfEntradaLog>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaLog[]>;
  nfEntradaLogRead: (
    readArgs: ReadArgs<TNfEntradaLog>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaLog>;
  nfEntradaLogDel: (
    delArgs: DelArgs<TNfEntradaLog>,
    ctx?: RpcContext
  ) => Promise<number>;
  nfEntradaLogCreate: (
    createArgs: CreateArgs<TNfEntradaLog>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaLog>;
  nfEntradaLogUpdate: (
    { id, data }: UpdateArgs<TNfEntradaLog>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaLog>;
}

export function nfEntradaLogRpc(connections: TConnections): TNfEntradaLogRpc {
  const nfEntradaLog = new NfEntradaLogModel(connections);

  return {
    // LIST
    async nfEntradaLogList(listArgs): Promise<TNfEntradaLog[]> {
      return nfEntradaLog.list(listArgs);
    },

    // READ
    async nfEntradaLogRead(readArgs) {
      return nfEntradaLog.read(readArgs);
    },

    // DEL
    async nfEntradaLogDel(delArgs) {
      return nfEntradaLog.del(delArgs);
    },

    // CREATE
    async nfEntradaLogCreate(createArgs) {
      return nfEntradaLog.create(createArgs);
    },

    // UPDATE
    async nfEntradaLogUpdate(updateArgs) {
      return nfEntradaLog.update(updateArgs);
    },
  };
}
