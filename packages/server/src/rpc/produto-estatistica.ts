import {
  Id,
  RpcContext,
  RpcCreateArgs,
  RpcDelArgs,
  RpcListArgs,
  RpcReadArgs,
  RpcUpdateArgs,
} from "@vt/types";
import {
  idSchema,
  idToWhere,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
  z,
} from "@vt/utils";
import { Connections } from "dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  CdEmpresa?: number;
  MesRef?: string;
  AnoRef?: string;
  CdProduto?: string;
};

export function ProdutoEstatistica(connections: Connections) {
  const knexPlano = connections.plano;
  const table = "EstatPro";
  const pk = ["CdEmpresa", "MesRef", "AnoRef", "CdProduto"];

  return {
    // LIST
    async produtoEstatisticaList(
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
    async produtoEstatisticaRead(
      { id }: RpcReadArgs,
      ctx?: RpcContext
    ): Promise<Record> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry as Record;
    },

    // DEL
    async produtoEstatisticaDel(
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
    async produtoEstatisticaCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async produtoEstatisticaUpdate(
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

    // INCREMENT
    async produtoEstatisticaIncrement(
      { id, quantidade }: { id: Id; quantidade: number },
      ctx?: RpcContext
    ): Promise<Id> {
      validator(id, "id", idSchema);
      validator(quantidade, "quantidade", z.number());
      const qry = await knexPlano(table)
        .increment("Entradas", quantidade)
        .where(idToWhere(pk, id))
        .returning(["Entradas"]);
      return qry;
    },
  };
}
