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
  z,
} from "../../../utils";
import { Connections } from "../dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  CdEmpresa?: string;
  CdProduto?: string;
  EstAtual?: string;
};

export interface EstoqueRpc {
  estoqueList: (listArgs: RpcListArgs, ctx?: RpcContext) => Promise<Record[]>;
  estoqueRead: (readArgs: RpcReadArgs, ctx?: RpcContext) => Promise<Record>;
  estoqueDel: (delArgs: RpcDelArgs, ctx?: RpcContext) => Promise<number>;
  estoqueCreate: (
    createArgs: RpcCreateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
  estoqueUpdate: (
    { id, rec }: RpcUpdateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
  estoqueIncrement: (
    args: { id: Id; quantidade: number },
    ctx?: RpcContext
  ) => Promise<{ EstAtual: number }[]>;
}

export function Estoque(connections: Connections): EstoqueRpc {
  const knexPlano = connections.plano;
  const table = "Estoque";
  const pk = ["CdEmpresa", "CdProduto"];

  return {
    // LIST
    async estoqueList(
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
    async estoqueRead({ id }: RpcReadArgs, ctx?: RpcContext): Promise<Record> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry as Record;
    },

    // DEL
    async estoqueDel({ id }: RpcDelArgs, ctx?: RpcContext): Promise<number> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async estoqueCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async estoqueUpdate(
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
    async estoqueIncrement(
      { id, quantidade }: { id: Id; quantidade: number },
      ctx?: RpcContext
    ) {
      validator(id, "id", idSchema);
      validator(quantidade, "quantidade", z.number());

      const qry = await knexPlano(table)
        .increment("EstAtual", quantidade)
        .where(idToWhere(pk, id))
        .returning(["EstAtual"]);
      return qry;
    },
  };
}
