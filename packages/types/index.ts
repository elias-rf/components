import { Knex } from "knex";

export type Where = [string, string, string];
export type OrderBy = [string, "asc" | "desc"];
export type Id = string[];

export type Connections = {
  [key: string]: Knex;
};

export type KnexCache = (knex: Knex.QueryBuilder) => Promise<any>;

export interface ListArgs {
  limit?: number;
  where?: Where[];
  orderBy?: OrderBy[];
}

declare var APP_VERSION: string;

export interface Pagination {}

export interface CurrentUser {
  kUsuario: string;
  nome: string;
  NomeUsuario: string;
  idGroup: string;
  token?: string;
}

export interface SchemaField {
  label?: string;
  field: string;
  type?:
    | "string"
    | "float"
    | "boolean"
    | "int"
    | "ID"
    | "currency"
    | "date"
    | "datetime"
    | "selection"
    | "tag";
  value?: string | boolean;
  visible?: boolean;
  fieldClass?: string;
  labelClass?: string;
  sortable?: boolean;
  required?: boolean;
  default?: any;
}

export type Schema = {
  pk: Id;
  fields: SchemaField[];
};

export interface AuthContextType {
  currentUser: CurrentUser;
  isAuthenticated: boolean;
  signIn: (username: string, password: string) => Promise<CurrentUser>;
  signOut: () => void;
  can: (idSubject: string, idGroup: string) => Promise<boolean>;
}

type KnexQuery = {
  from: string;
  orWhere?: Where[];
  where?: Where[];
  whereRaw?: Where[];
  whereBetween?: Where[];
  whereNotBetween?: Where[];
  whereNot?: Where[];
  whereIn?: Where[];
  whereNotIn?: Where[];
  orderBy?: OrderBy[];
  limit?: number;
  offset?: number;
  having?: Where[];
  join?: [string, string, string, string][];
  select: string[];
  delete: string[];
  insert: UnknownObject;
  update: UnknownObject;
};

export type Action = {
  type: string;
  payload?: any;
};

export type Dispatch = (action: Action) => void;

export type Reducer = (state: any, action: Action) => any;

export type GenericObject = { [key: string]: any };
export type UnknownObject = Record<PropertyKey, unknown>;
export type UnknownArray = Array<unknown>;

export type RpcContext = { currentUser: CurrentUser };

export interface RpcListArgs {
  limit?: number;
  where?: Where[];
  orderBy?: OrderBy[];
}

export interface RpcReadArgs {
  id: Id;
}

export interface RpcDelArgs {
  id: Id;
}

export interface RpcUpdateArgs<T> {
  id: Id;
  rec: T;
}

export interface RpcCreateArgs<T> {
  rec: T;
}

export type TreeData = {
  key: string;
  label: string;
  child?: TreeData;
}[];
