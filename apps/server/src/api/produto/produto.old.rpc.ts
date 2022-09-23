import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { ProdutoModel } from "./produto.model";
import { TProduto } from "./produto.type";

export interface TProdutoRpc {
  produtoList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto[]>;
  produtoRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
  produtoDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  produtoCreate(
    args: CreateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
  produtoUpdate(
    args: UpdateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
}

export function produtoRpc(connections: TConnections): TProdutoRpc {
  const produtoModel = new ProdutoModel(connections);
  return {
    // LIST
    produtoList(args) {
      return produtoModel.list(args);
    },

    // READ
    produtoRead(args) {
      return produtoModel.read(args);
    },

    // DEL
    produtoDel(args) {
      return produtoModel.del(args);
    },

    // CREATE
    async produtoCreate(args) {
      return produtoModel.create(args);
    },

    // UPDATE
    async produtoUpdate(args) {
      return produtoModel.update(args);
    },
  };
}
