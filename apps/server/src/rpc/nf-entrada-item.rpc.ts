import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "dal/connections";
import { NfEntradaItemModel, TNfEntradaItem } from "../model";

export interface TNfEntradaItemRpc {
  nfEntradaItemList: (
    listArgs: ListArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem[]>;
  nfEntradaItemRead: (
    readArgs: ReadArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem>;
  nfEntradaItemDel: (
    delArgs: DelArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<number>;
  nfEntradaItemCreate: (
    createArgs: CreateArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem>;
  nfEntradaItemUpdate: (
    updateArgs: UpdateArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem>;
}

export function nfEntradaItemRpc(connections: TConnections): TNfEntradaItemRpc {
  const nfEntradaItem = new NfEntradaItemModel(connections);

  return {
    // LIST
    async nfEntradaItemList(listArgs) {
      return nfEntradaItem.list(listArgs);
    },

    // READ
    async nfEntradaItemRead(readArgs) {
      return nfEntradaItem.read(readArgs);
    },

    // DEL
    async nfEntradaItemDel(delArgs): Promise<number> {
      return nfEntradaItem.del(delArgs);
    },

    // CREATE
    async nfEntradaItemCreate(createArgs) {
      return nfEntradaItem.create(createArgs);
    },

    // UPDATE
    async nfEntradaItemUpdate(updateArgs) {
      return nfEntradaItem.update(updateArgs);
    },
  };
}
