export type Where = [string, string, any];
export type Select = string[];
export type Order = [string, "asc" | "desc"];
export type Pks = string[];
export type Ids = { [fields: string]: any };

export interface CurrentUser {
  usuario_id: number;
  nome_login: string;
  nome: string;
  group_id: string;
  token?: string;
}

export type SchemaFieldType =
  | "string"
  | "float"
  | "boolean"
  | "int"
  | "currency"
  | "date"
  | "datetime"
  | "selection"
  | "tag";

export type SchemaField = {
  field: string;
  name: string;
  label?: string;
  type?: SchemaFieldType;
  visible?: boolean;
  fieldClass?: string;
  labelClass?: string;
  sortable?: boolean;
  required?: boolean;
  defaultValue?: any;
  primaryKey?: boolean;
  allowNull?: boolean;
  autoIncrement?: boolean;
  size?: number;
  scale?: number;
};

export type Schema = SchemaField[];

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

export type ListArgs = {
  table?: string;
  limit?: number;
  where?: Where[];
  order?: Order[];
  select?: Select;
};

export type ReadArgs = { table?: string; id: Ids; select?: Select };

export type DelArgs = { table?: string; id: Ids };

export type UpdateArgs = { table?: string; id: Ids; data: GenericObject };

export type CreateArgs = { table?: string; data: GenericObject };

export interface IEvent {
  name: string;
  component: string;
  event: string;
  value: any;
}

export type TEntity = {
  database: string;
  table: string;
  schema: Schema;
};

export type TEntitySchema = {
  [table: string]: TEntity;
};