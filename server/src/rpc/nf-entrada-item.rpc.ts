import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "dal/connections";
import { NfEntradaItemModel, TNfEntradaItem } from "../model";

export interface TNfEntradaItemRpc {
  nfEntradaItemList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem[]>;
  nfEntradaItemRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem>;
  nfEntradaItemDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaItemCreate: (
    createArgs: CreateArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaItemUpdate: (
    updateArgs: UpdateArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function nfEntradaItemRpc(connections: TConnections): TNfEntradaItemRpc {
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
