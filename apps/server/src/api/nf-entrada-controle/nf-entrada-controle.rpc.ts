import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { NfEntradaControleModel } from "../nf-entrada-controle/nf-entrada-controle.model";
import {
  TNfEntradaControle,
  TNfEntradaControleId,
} from "../nf-entrada-controle/nf-entrada-controle.type";

export interface TNfEntradaControleRpc {
  nfEntradaControleList: (
    listArgs: ListArgs<TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaControle[]>;
  nfEntradaControleRead: (
    readArgs: ReadArgs<TNfEntradaControleId, TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaControle>;
  nfEntradaControleDel: (
    delArgs: DelArgs<TNfEntradaControleId>,
    ctx?: RpcContext
  ) => Promise<number>;
  nfEntradaControleCreate: (
    createArgs: CreateArgs<TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaControle>;
  nfEntradaControleUpdate: (
    updateArgs: UpdateArgs<TNfEntradaControleId, TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaControle>;
}

export function nfEntradaControleRpc(
  connections: TConnections
): TNfEntradaControleRpc {
  const nfEntradaControle = new NfEntradaControleModel(connections);
  return {
    // LIST
    async nfEntradaControleList(listArgs) {
      return nfEntradaControle.list(listArgs);
    },

    // READ
    async nfEntradaControleRead(readArgs) {
      return nfEntradaControle.read(readArgs);
    },

    // DEL
    async nfEntradaControleDel(delArgs) {
      return nfEntradaControle.del(delArgs);
    },

    // CREATE
    async nfEntradaControleCreate(createArgs) {
      return nfEntradaControle.create(createArgs);
    },

    // UPDATE
    async nfEntradaControleUpdate(updateArgs) {
      return nfEntradaControle.update(updateArgs);
    },
  };
}
