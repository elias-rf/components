import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { NfEntradaLogModel } from "./nf-entrada-log.model";
import { TNfEntradaLog } from "./nf-entrada-log.type";

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
    createArgs: CreateArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntradaLog>;
  nfEntradaLogUpdate: (
    { id, data }: UpdateArgs,
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
