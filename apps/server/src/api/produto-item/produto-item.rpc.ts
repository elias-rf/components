import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { ProdutoItemModel } from "./produto-item.model";
import { TProdutoItem } from "./produto-item.type";

export interface TProdutoItemRpc {
  produtoItemEstatisticaList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<TProdutoItem[]>;
  produtoItemEstatisticaRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<TProdutoItem>;
  produtoItemEstatisticaDel(
    delArgs: DelArgs,
    ctx?: RpcContext
  ): Promise<number>;
  produtoItemEstatisticaCreate(
    createArgs: CreateArgs,
    ctx?: RpcContext
  ): Promise<TProdutoItem>;
  produtoItemEstatisticaUpdate(
    updateArgs: UpdateArgs,
    ctx?: RpcContext
  ): Promise<TProdutoItem>;
}

export function produtoItemRpc(connections: TConnections) {
  const produtoItemModel = new ProdutoItemModel(connections);

  return {
    // LIST
    async produtoItemList(args: ListArgs): Promise<TProdutoItem[]> {
      return produtoItemModel.list(args);
    },

    // READ
    async produtoItemRead(args: ReadArgs): Promise<TProdutoItem> {
      return produtoItemModel.read(args);
    },

    // DEL
    async produtoItemDel(args: DelArgs): Promise<number> {
      return produtoItemModel.del(args);
    },

    // CREATE
    async produtoItemCreate(args: CreateArgs): Promise<TProdutoItem> {
      return produtoItemModel.create(args);
    },

    // UPDATE
    async produtoItemUpdate(args: UpdateArgs): Promise<TProdutoItem> {
      return produtoItemModel.update(args);
    },
  };
}
