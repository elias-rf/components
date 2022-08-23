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
import { NfEntradaControleModel } from "../model";

type NfEntradaControleRecord = {
  CdFilial?: string;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: string;
  CdProduto?: string;
  NumLote?: string;
  Quantidade?: string;
};

export interface TNfEntradaControleRpc {
  nfEntradaControleList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaControleRecord[]>;
  nfEntradaControleRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaControleRecord>;
  nfEntradaControleDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaControleCreate: (
    createArgs: CreateArgs<NfEntradaControleRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaControleUpdate: (
    updateArgs: UpdateArgs<NfEntradaControleRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function nfEntradaControleRpc(
  connections: TConnections
): TNfEntradaControleRpc {
  const nfEntradaControle = new NfEntradaControleModel(connections);
  return {
    // LIST
    async nfEntradaControleList({ where, orderBy, limit, select }) {
      return nfEntradaControle.list(where, orderBy, limit, select);
    },

    // READ
    async nfEntradaControleRead({ id, select }) {
      return nfEntradaControle.read(id, select);
    },

    // DEL
    async nfEntradaControleDel({ id }) {
      return nfEntradaControle.del(id);
    },

    // CREATE
    async nfEntradaControleCreate({ data }) {
      return nfEntradaControle.create(data);
    },

    // UPDATE
    async nfEntradaControleUpdate({ id, data }) {
      return nfEntradaControle.update(id, data);
    },
  };
}
