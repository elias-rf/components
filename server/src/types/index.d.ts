import { ApolloServer } from "apollo-server";
import { Knex } from "knex";

export type Where = [string, string, string];

export type Order = [string, "asc" | "desc"];

export interface Pagination {}

export interface CurrentUser {
  idGroup: string;
}

export interface KnexDbs {
  [key: string]: Knex;
}

export type KnexCache = (knex: Knex.QueryBuilder) => Promise<any>;

export interface ListArgs {
  limit?: number;
  where?: Where[];
  order?: Order[];
}

export interface Context {
  userLogged: CurrentUser;
  res: Express.Response;
  knexDbs: KnexDbs;
  server: ApolloServer;
  cache: KnexCache;
}

type GenericObject = { [key: string]: any };
type UnknownObject = Record<PropertyKey, unknown>;
type UnknownArray = Array<unknown>;
