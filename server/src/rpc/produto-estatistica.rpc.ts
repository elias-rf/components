import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoEstatisticaModel, ProdutoEstatisticaRecord } from "../model";

export interface TProdutoEstatisticaRpc {
  produtoEstatisticaList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<ProdutoEstatisticaRecord[]>;
  produtoEstatisticaRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<ProdutoEstatisticaRecord>;
  produtoEstatisticaDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  produtoEstatisticaCreate(
    createArgs: CreateArgs<ProdutoEstatisticaRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
  produtoEstatisticaUpdate(
    updateArgs: UpdateArgs<ProdutoEstatisticaRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
  produtoEstatisticaIncrement(
    { id, quantidade }: { id: Id; quantidade: number },
    ctx?: RpcContext
  ): Promise<Id>;
}

export function produtoEstatisticaRpc(
  connections: TConnections
): TProdutoEstatisticaRpc {
  const produtoEstatisticaModel = new ProdutoEstatisticaModel(connections);
  const table = "EstatPro";
  const pk = ["CdEmpresa", "MesRef", "AnoRef", "CdProduto"];

  return {
    // LIST
    async produtoEstatisticaList({ where, orderBy, limit, select }) {
      return produtoEstatisticaModel.list(where, orderBy, limit, select);
    },

    // READ
    async produtoEstatisticaRead({ id, select }) {
      return produtoEstatisticaModel.read(id, select);
    },

    // DEL
    async produtoEstatisticaDel({ id }) {
      return produtoEstatisticaModel.del(id);
    },

    // CREATE
    async produtoEstatisticaCreate({ data }) {
      return produtoEstatisticaModel.create(data);
    },

    // UPDATE
    async produtoEstatisticaUpdate({ id, data }) {
      return produtoEstatisticaModel.update(id, data);
    },

    // INCREMENT
    async produtoEstatisticaIncrement({ id, quantidade }) {
      return produtoEstatisticaModel.increment(id, quantidade);
    },
  };
}
