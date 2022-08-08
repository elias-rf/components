import type {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "../../../types";
import type { Connections } from "../dal/connections";
import {
  NfEntradaModel,
  NfEntradaRecord,
} from "../model/plano/nf-entrada.model";

export interface NfEntradaRpc {
  nfEntradaList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaRecord[]>;
  nfEntradaRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaRecord>;
  nfEntradaDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaCreate: (
    createArgs: CreateArgs<NfEntradaRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaUpdate: (
    { id, data }: UpdateArgs<NfEntradaRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function NfEntrada(connections: Connections): NfEntradaRpc {
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
