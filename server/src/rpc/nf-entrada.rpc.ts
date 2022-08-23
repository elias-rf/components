import type {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../dal/connections";
import { NfEntradaModel, TNfEntrada } from "../model";

export interface TNfEntradaRpc {
  nfEntradaList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntrada[]>;
  nfEntradaRead: (readArgs: ReadArgs, ctx?: RpcContext) => Promise<TNfEntrada>;
  nfEntradaDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaCreate: (
    createArgs: CreateArgs<TNfEntrada>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaUpdate: (
    { id, data }: UpdateArgs<TNfEntrada>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function nfEntradaRpc(connections: TConnections): TNfEntradaRpc {
  const nfEntradaModel = new NfEntradaModel(connections);

  return {
    // LIST
    async nfEntradaList({ where, orderBy, limit, select }) {
      return nfEntradaModel.list(where, orderBy, limit, select);
    },

    // READ
    async nfEntradaRead({ id, select }) {
      return nfEntradaModel.read(id, select);
    },

    // DEL
    async nfEntradaDel({ id }): Promise<number> {
      return nfEntradaModel.del(id);
    },

    // CREATE
    async nfEntradaCreate({ data }) {
      return nfEntradaModel.create(data);
    },

    // UPDATE
    async nfEntradaUpdate({ id, data }) {
      return nfEntradaModel.update(id, data);
    },
  };
}
