import { Connections } from "dal/connections";
import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "../../../types";
import {
  NfEntradaItemModel,
  NfEntradaItemRecord,
} from "../model/plano/nf-entrada-item.model";

export interface NfEntradaItemRpc {
  nfEntradaItemList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaItemRecord[]>;
  nfEntradaItemRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaItemRecord>;
  nfEntradaItemDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaItemCreate: (
    createArgs: CreateArgs<NfEntradaItemRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaItemUpdate: (
    updateArgs: UpdateArgs<NfEntradaItemRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function NfEntradaItem(connections: Connections): NfEntradaItemRpc {
  const nfEntradaItem = new NfEntradaItemModel(connections);

  return {
    // LIST
    async nfEntradaItemList({ where, orderBy, limit, select }) {
      return nfEntradaItem.list(where, orderBy, limit, select);
    },

    // READ
    async nfEntradaItemRead({ id, select }) {
      return nfEntradaItem.read(id, select);
    },

    // DEL
    async nfEntradaItemDel({ id }): Promise<number> {
      return nfEntradaItem.del(id);
    },

    // CREATE
    async nfEntradaItemCreate({ data }) {
      return nfEntradaItem.create(data);
    },

    // UPDATE
    async nfEntradaItemUpdate({ id, data }) {
      return nfEntradaItem.update(id, data);
    },
  };
}
