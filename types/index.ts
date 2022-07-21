export type Where = [string, string, string];
export type OrderBy = [string, "asc" | "desc"];
export type Id = string[];

export interface ListArgs {
  limit?: number;
  where?: Where[];
  orderBy?: OrderBy[];
}

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

export type Action = {
  type: string;
  payload?: any;
};

export type Dispatch = (action: Action) => void;

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
