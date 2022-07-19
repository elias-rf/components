import { Connections } from "dal/connections";
import {
  Id,
  RpcContext,
  RpcCreateArgs,
  RpcDelArgs,
  RpcListArgs,
  RpcReadArgs,
  RpcUpdateArgs,
} from "../../../types";
import {
  idSchema,
  idToWhere,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "../../../utils";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

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

export function ProdutoControle(connections: Connections) {
  const knexPlano = connections.plano;
  const table = "Lotes";
  const pk = ["CdFilial", "CdProduto", "CdLote"];

  return {
    // LIST
    async produtoControleList(
      { where = [], orderBy = [], limit = 50 }: RpcListArgs,
      ctx?: RpcContext
    ): Promise<Record[]> {
      validator(where, "where", whereSchema);
      validator(orderBy, "orderBy", orderBySchema);
      validator(limit, "limit", limitSchema);

      return knexPlano(table)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
    },

    // READ
    async produtoControleRead(
      { id }: RpcReadArgs,
      ctx?: RpcContext
    ): Promise<Record> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry as unknown as Record;
    },

    // DEL
    async produtoControleDel(
      { id }: RpcDelArgs,
      ctx?: RpcContext
    ): Promise<number> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async produtoControleCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async produtoControleUpdate(
      { id, rec }: RpcUpdateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(id, "id", idSchema);
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table)
        .update(rec)
        .where(idToWhere(pk, id))
        .returning(pk);
      return qry;
    },
  };
}
