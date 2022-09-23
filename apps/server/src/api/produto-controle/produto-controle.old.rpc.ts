import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { ProdutoControleModel } from "./produto-controle.model";
import { TProdutoControle } from "./produto-controle.type";

export interface TProdutoControleRpc {
  produtoControleList(
    args: ListArgs,
    ctx?: RpcContext
  ): Promise<TProdutoControle[]>;
  produtoControleRead(
    { id }: ReadArgs,
    ctx?: RpcContext
  ): Promise<TProdutoControle>;
  produtoControleDel({ id }: DelArgs, ctx?: RpcContext): Promise<number>;
  produtoControleCreate(
    { data }: CreateArgs,
    ctx?: RpcContext
  ): Promise<TProdutoControle>;
  produtoControleUpdate(
    { id, data }: UpdateArgs,
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
