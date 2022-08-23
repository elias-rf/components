import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  UpdateArgs,
} from "@er/types";
import { Id } from "@er/types";
import { TConnections } from "../dal/connections";
import { ProdutoModel, TProduto } from "../model";

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
    args: CreateArgs<TProduto>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<Id>;
  produtoUpdate(
    args: UpdateArgs<TProduto>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<Id>;
}

export function produtoRpc(connections: TConnections): TProdutoRpc {
  const produtoModel = new ProdutoModel(connections);
  return {
    // LIST
    produtoList({ where, orderBy, limit, select }) {
      return produtoModel.list(where, orderBy, limit, select);
    },

    // READ
    produtoRead({ id, select }) {
      return produtoModel.read(id, select);
    },

    // DEL
    produtoDel({ id }) {
      return produtoModel.del(id);
    },

    // CREATE
    async produtoCreate({ data }) {
      return produtoModel.create(data);
    },

    // UPDATE
    async produtoUpdate({ id, data }) {
      return produtoModel.update(id, data);
    },
  };
}
