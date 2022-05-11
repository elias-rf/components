import idToWhere from "./id-to-where";
import { KnexDbs, ListArgs, KnexCache, Context } from "types";
import knexJson from "../utils/database/knex-json";
import isEmpty from "../utils/is/is-empty";

export interface Record {
  [key: string]: any;
}

export interface Dal {
  read: (pk: string[], { knexDbs, cache }: Context) => Promise<object>;
  list: (
    { limit, where, order }: ListArgs,
    { knexDbs, cache }: Context
  ) => Promise<Record[]>;
  create: (input: Record, { knexDbs, cache }: Context) => Promise<Record>;
  del: (pk: string[], { knexDbs, cache }: Context) => Promise<number>;
  update: (
    { pk, input }: { [key: string]: any; input: any },
    { knexDbs, cache }: Context
  ) => Promise<Record>;
  [key: string]: any;
}

/**
 * Cria um DAL CRUD para a tabela especificada
 *
 */
function dalFactory({
  dbName,
  tableName,
  primaryKey,
}: {
  dbName: string;
  tableName: string;
  primaryKey: string;
}): Dal {
  const dal: Dal = {
    /**
     * Carrega um registro pelo seu id
     */
    read: async (
      pk: string[],
      { knexDbs, cache }: { knexDbs: KnexDbs; cache: KnexCache }
    ): Promise<object> => {
      const knex = knexDbs[dbName];
      const sql = {
        from: tableName,
        where: idToWhere(primaryKey, pk),
      };
      const query = knexJson(knex, sql);
      const rsp = await cache(query);
      return rsp[0];
    },

    /**
     * Lista todos os registros
     */
    list: (
      { limit = 1000, where = [], order = [] }: ListArgs,
      { knexDbs, cache }: Context
    ) => {
      let orderBy: any = [[primaryKey]];
      if (!isEmpty(order)) {
        orderBy = order;
      }
      const knex = knexDbs[dbName];
      const sql = {
        from: tableName,
        where,
        orderBy,
        limit,
      };
      const query = knexJson(knex, sql);
      return cache(query);
    },
    /**
     * Cria um novo registro
     */
    create: (input: Record, { knexDbs }: Context) => {
      const knex = knexDbs[dbName];
      const sql = { from: tableName, insert: input, returning: "*" };
      const query = knexJson(knex, sql);
      return query.then((rec: Record[]) => rec[0]);
    },

    /**
     * Exclui um registro
     */
    del: (pk: string[], { knexDbs }: Context) => {
      const knex = knexDbs[dbName];
      const sql = {
        from: tableName,
        del: true,
        where: idToWhere(primaryKey, pk),
      };
      const query = knexJson(knex, sql);
      return query.then((res) => res);
    },

    /**
     * Altera um registro
     */
    update: (
      args: { [key: string]: string; input: any },
      { knexDbs }: Context
    ) => {
      const pk = args[primaryKey];
      const input = args.input;
      const knex = knexDbs[dbName];
      const sql = {
        from: tableName,
        update: input,
        where: idToWhere(primaryKey, pk),
        returning: "*",
      };
      const query = knexJson(knex, sql);
      return query.then((rec: Record[]) => {
        return rec[0];
      });
    },
  };

  return dal;
}

export default dalFactory;
