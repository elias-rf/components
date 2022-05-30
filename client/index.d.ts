declare module "*.jpg";
declare module "*.gif";
declare module "*.svg";
declare var APP_VERSION: string;

type UnknownObject = Record<PropertyKey, unknown>;
type UnknownArray = Array<unknown>;

export type Where = [string, string, string];

export type OrderBy = [string, "asc" | "desc"];

export type Pks = string[];

export interface Pagination {}

export interface CurrentUser {
  kUsuario: string;
  nome: string;
  NomeUsuario: string;
  idGroup: string;
}

export interface ListArgs {
  limit?: number;
  where?: Where[];
  order?: OrderBy[];
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

export interface Schema {
  pk: Pks;
  fields: SchemaField[];
}

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
