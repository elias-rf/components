export type RecFields<Rec> = keyof Rec;
export type Where<Rec> = [RecFields<Rec>, string, any];
export type Select<Rec> = RecFields<Rec>[];
export type Order<Rec> = [RecFields<Rec>, "asc" | "desc"];
export type Id<Rec> = RecFields<Rec>[];
export type Ids<Rec> = RecFields<Rec>[];
export type Pks<Rec> = Record<RecFields<Rec>, string | number>;

export interface CurrentUser {
  kUsuario: string;
  nome: string;
  NomeUsuario: string;
  idGroup: string;
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

export type Schema = {
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

export interface ListArgs<Rec> {
  limit?: number;
  where?: Where<Rec>[];
  orderBy?: Order<Rec>[];
  select?: Select<Rec>;
}

export interface ReadArgs<Rec> {
  pk: Pks<Rec>;
  select?: Select<Rec>;
}

export interface DelArgs<Rec> {
  pk: Pks<Rec>;
}

export interface UpdateArgs<Rec> {
  pk: Pks<Rec>;
  data: Rec;
}

export interface CreateArgs<Rec> {
  data: Rec;
}

export interface IEvent {
  name: string;
  value: any;
  targetProps: any;
  targetName: string;
  eventName: string;
  event?: React.SyntheticEvent;
}

export type TEntity = Schema & {
  database: string;
  table: string;
};

export type TEntitySchema = {
  [table: string]: TEntity;
};
