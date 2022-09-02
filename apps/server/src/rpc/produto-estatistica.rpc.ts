import {
  CreateArgs,
  DelArgs,
  Ids,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoEstatisticaModel, TProdutoEstatistica } from "../model";

export interface TProdutoEstatisticaRpc {
  produtoEstatisticaList(
    listArgs: ListArgs<TProdutoEstatistica>,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica[]>;
  produtoEstatisticaRead(
    readArgs: ReadArgs<TProdutoEstatistica>,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica>;
  produtoEstatisticaDel(
    delArgs: DelArgs<TProdutoEstatistica>,
    ctx?: RpcContext
  ): Promise<number>;
  produtoEstatisticaCreate(
    createArgs: CreateArgs<TProdutoEstatistica>,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica>;
  produtoEstatisticaUpdate(
    updateArgs: UpdateArgs<TProdutoEstatistica>,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica>;
  produtoEstatisticaIncrement(
    { id, quantidade }: { id: Ids<TProdutoEstatistica>; quantidade: number },
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica>;
}

export function produtoEstatisticaRpc(
  connections: TConnections
): TProdutoEstatisticaRpc {
  const produtoEstatisticaModel = new ProdutoEstatisticaModel(connections);

  return {
    // LIST
    async produtoEstatisticaList(args) {
      return produtoEstatisticaModel.list(args);
    },

    // READ
    async produtoEstatisticaRead(args) {
      return produtoEstatisticaModel.read(args);
    },

    // DEL
    async produtoEstatisticaDel(args) {
      return produtoEstatisticaModel.del(args);
    },

    // CREATE
    async produtoEstatisticaCreate(args) {
      return produtoEstatisticaModel.create(args);
    },

    // UPDATE
    async produtoEstatisticaUpdate(args) {
      return produtoEstatisticaModel.update(args);
    },

    // INCREMENT
    async produtoEstatisticaIncrement({ id, quantidade }) {
      return produtoEstatisticaModel.increment(id, quantidade);
    },
  };
}
