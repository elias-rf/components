import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "../../dal/connections";
import { ProdutoItemModel } from "./produto-item.model";
import { TProdutoItem } from "./produto-item.type";

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
