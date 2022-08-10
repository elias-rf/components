export type Where = [string, string, string];
export type Select = string[];
export type OrderBy = [string, "asc" | "desc"];
export type Id = string[];

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

export type TreeData = {
  key: string;
  label: string;
  child?: TreeData;
}[];

export interface ListArgs {
  limit?: number;
  where?: Where[];
  orderBy?: OrderBy[];
  select?: Select;
}

export interface ReadArgs {
  id: Id;
  select?: Select;
}

export interface DelArgs {
  id: Id;
}

export interface UpdateArgs<T> {
  id: Id;
  data: T;
}

export interface CreateArgs<T> {
  data: T;
}
