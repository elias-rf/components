import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "dal/connections";
import { NfEntradaItemModel } from "../nf-entrada-item/nf-entrada-item.model";
import {
  TNfEntradaItem,
  TNfEntradaItemId,
} from "../nf-entrada-item/nf-entrada-item.type";

export interface TNfEntradaItemRpc {
  nfEntradaItemList: (
    listArgs: ListArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem[]>;
  nfEntradaItemRead: (
    readArgs: ReadArgs<TNfEntradaItemId, TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem>;
  nfEntradaItemDel: (
    delArgs: DelArgs<TNfEntradaItemId>,
    ctx?: RpcContext
  ) => Promise<number>;
  nfEntradaItemCreate: (
    createArgs: CreateArgs<TNfEntradaItem>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem>;
  nfEntradaItemUpdate: (
    updateArgs: UpdateArgs<TNfEntradaItemId, TNfEntradaItem>,
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
