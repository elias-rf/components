import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { ProdutoModel } from "../produto/produto.model";
import { TProduto, TProdutoId } from "../produto/produto.type";

export interface TProdutoRpc {
  produtoList(
    args: ListArgs<TProduto>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto[]>;
  produtoRead(
    args: ReadArgs<TProdutoId, TProduto>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
  produtoDel(
    args: DelArgs<TProdutoId>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  produtoCreate(
    args: CreateArgs<TProduto>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
  produtoUpdate(
    args: UpdateArgs<TProdutoId, TProduto>,
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
