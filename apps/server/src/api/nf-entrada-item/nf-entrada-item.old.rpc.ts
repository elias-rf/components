import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { NfEntradaItemModel } from "./nf-entrada-item.model";
import { TNfEntradaItem } from "./nf-entrada-item.type";

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
    createArgs: CreateArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntradaItem>;
  nfEntradaItemUpdate: (
    updateArgs: UpdateArgs,
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
