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
import { ProdutoControleModel, TProdutoControle } from "../model";

type Record = {
  Aspecto: string;
  CdFilial: number;
  CdFornecedor: number;
  CdLote: string;
  CdNRA: string;
  CdProduto: string;
  Densidade: number;
  DtAnalise: string;
  DtEntrada: string;
  DtFabricacao: string;
  DtLimiteUso: string;
  DtValidade: string;
  FatorCorrecao: number;
  Modelo: string;
  NumNfEntrada: string;
  PercentualDiluicao: number;
  QtdeAdquirida: number;
  SaldoPeso: number;
  SerieNfEntrada: string;
  SituacaoLote: string;
  TipoLote: string;
};

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
    { data }: CreateArgs<TProdutoControle>,
    ctx?: RpcContext
  ): Promise<Id>;
  produtoControleUpdate(
    { id, data }: UpdateArgs<TProdutoControle>,
    ctx?: RpcContext
  ): Promise<Id>;
}

export function produtoControleRpc(
  connections: TConnections
): TProdutoControleRpc {
  const produtoControle = new ProdutoControleModel(connections);

  return {
    // LIST
    async produtoControleList({ where, orderBy, limit, select }) {
      return produtoControle.list(where, orderBy, limit, select);
    },

    // READ
    async produtoControleRead({ id, select }) {
      return produtoControle.read(id, select);
    },

    // DEL
    async produtoControleDel({ id }) {
      return produtoControle.del(id);
    },

    // CREATE
    async produtoControleCreate({ data }) {
      return produtoControle.create(data);
    },

    // UPDATE
    async produtoControleUpdate({ id, data }) {
      return produtoControle.update(id, data);
    },
  };
}
