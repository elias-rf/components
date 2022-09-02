export type Where<Rec> = [keyof Rec, string, any];
export type Select<Rec> = (keyof Rec)[];
export type Order<Rec> = [keyof Rec, "asc" | "desc"];
export type Pks<Rec> = (keyof Rec)[];
export type Ids<Rec> = { [fields in keyof Rec]: string };

export interface CurrentUser {
  usuario_id: string;
  nome_login: string;
  nome: string;
  grupo_id: string;
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

export type ListArgs<Rec> = {
  limit?: number;
  where?: Where<Rec>[];
  order?: Order<Rec>[];
  select?: Select<Rec>;
};

export type ReadArgs<Rec> = {
  id: Ids<Rec>;
  select?: Select<Rec>;
};

export type DelArgs<Rec> = {
  id: Ids<Rec>;
};

export type UpdateArgs<Rec> = {
  id: Ids<Rec>;
  data: Rec;
};

export type CreateArgs<Rec> = {
  data: Rec;
};

export interface IEvent {
  name: string;
  value: any;
  targetProps: any;
  targetName: string;
  eventName: string;
  event?: React.SyntheticEvent;
}

export type TEntity = {
  database: string;
  table: string;
  fields: Schema;
};

export type TEntitySchema = {
  [table: string]: TEntity;
};
