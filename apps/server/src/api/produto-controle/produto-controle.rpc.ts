import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoControleModel } from "../produto-controle/produto-controle.model";
import {
  TProdutoControle,
  TProdutoControleId,
} from "../produto-controle/produto-controle.type";

export interface TProdutoControleRpc {
  produtoControleList(
    args: ListArgs<TProdutoControle>,
    ctx?: RpcContext
  ): Promise<TProdutoControle[]>;
  produtoControleRead(
    { id }: ReadArgs<TProdutoControleId, TProdutoControle>,
    ctx?: RpcContext
  ): Promise<TProdutoControle>;
  produtoControleDel(
    { id }: DelArgs<TProdutoControleId>,
    ctx?: RpcContext
  ): Promise<number>;
  produtoControleCreate(
    { data }: CreateArgs<TProdutoControle>,
    ctx?: RpcContext
  ): Promise<TProdutoControle>;
  produtoControleUpdate(
    { id, data }: UpdateArgs<TProdutoControleId, TProdutoControle>,
    ctx?: RpcContext
  ): Promise<TProdutoControle>;
}

export function produtoControleRpc(
  connections: TConnections
): TProdutoControleRpc {
  const produtoControle = new ProdutoControleModel(connections);

  return {
    // LIST
    async produtoControleList(args) {
      return produtoControle.list(args);
    },

    // READ
    async produtoControleRead(args) {
      return produtoControle.read(args);
    },

    // DEL
    async produtoControleDel(args) {
      return produtoControle.del(args);
    },

    // CREATE
    async produtoControleCreate(args) {
      return produtoControle.create(args);
    },

    // UPDATE
    async produtoControleUpdate(args) {
      return produtoControle.update(args);
    },
  };
}
