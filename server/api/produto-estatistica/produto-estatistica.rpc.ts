import {
  CreateArgs,
  DelArgs,
  Ids,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "../../../types";
import { TProdutoEstatistica } from "../../../types/produto-estatistica.type";
import { TConnections } from "../../dal/connections";
import { ProdutoEstatisticaModel } from "../produto-estatistica/produto-estatistica.model";

export interface TProdutoEstatisticaRpc {
  produtoEstatisticaList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica[]>;
  produtoEstatisticaRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica>;
  produtoEstatisticaDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  produtoEstatisticaCreate(
    createArgs: CreateArgs,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica>;
  produtoEstatisticaUpdate(
    updateArgs: UpdateArgs,
    ctx?: RpcContext
  ): Promise<TProdutoEstatistica>;
  produtoEstatisticaIncrement(
    { id, quantidade }: { id: Ids; quantidade: number },
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
    async produtoEstatisticaIncrement(args) {
      return produtoEstatisticaModel.increment(args);
    },
  };
}
