import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  UpdateArgs,
} from "@er/types";
import { Id } from "@er/types";
import { Connections } from "../dal/connections";
import { ProdutoModel, ProdutoRecord } from "../model/oftalmo/produto.model";

export interface ProdutoRpc {
  produtoList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<ProdutoRecord[]>;
  produtoRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<ProdutoRecord>;
  produtoDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  produtoCreate(
    args: CreateArgs<ProdutoRecord>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<Id>;
  produtoUpdate(
    args: UpdateArgs<ProdutoRecord>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<Id>;
}

export function Produto(connections: Connections): ProdutoRpc {
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