/**
 * Tipos para Queries
 */

/** SQL.WHERE */
export type TWhere = [string, string, any];

/** SQL.SELECT */
export type TSelect = string[];

/** SQL.ORDERBY */
export type TOrder = [string, "asc" | "desc"];

/** Array com nome dos campos chave primária */
export type TPks = string[];

/** Objeto que representa registro único */
export type TIds = { [fields: string]: any };

/** Objeto com chave primária de um registro */
export type TSelected = { [fields: string]: any };

/** Dados do usuário logado */
export type TCurrentUser = {
  usuario_id: number;
  nome_login: string;
  nome: string;
  group_id: string;
  token?: string;
};

/** Tipos aceitos por Input */
export type TInputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "number"
  | "password"
  | "text";

/** Objeto genérico */
export type TGenericObject = { [key: string]: any };

/** Registro genérico */
export type TUnknownObject = Record<PropertyKey, unknown>;

/** Array genérico */
export type TUnknownArray = unknown[];

/** Contexto para RPC */
export type TRpcContext = { currentUser: TCurrentUser };

/** Dados para component arvore */
export type TreeData = {
  key: string;
  label: string;
  child?: TreeData;
}[];

/** Argumentos para modelo de listagem */
export type TListArgs = {
  table?: string;
  limit?: number;
  where?: TWhere[];
  order?: TOrder[];
  select?: TSelect;
};

/** Argumentos para modelo de registro */
export type TReadArgs = { table?: string; id: TIds; select?: TSelect };

/** Argumentos para modelo de exclusão */
export type TDelArgs = { table?: string; id: TIds };

/** Argumentos para modelo de alteração */
export type TUpdateArgs = { table?: string; id: TIds; data: TGenericObject };

/** Argumentos para modelo de criação */
export type TCreateArgs = { table?: string; data: TGenericObject };

/** Eventos para componentes */
export type TEvent = {
  name: string;
  component: string;
  event: string;
  value: any;
};

/**
 * Tipos para Banco de Dados
 */

/** Tipos de campos */
export type TFieldType =
  | "string"
  | "float"
  | "int"
  | "boolean"
  | "currency"
  | "date"
  | "datetime"
  | "selection"
  | "tag";

/** Definição de características para um campo comuns no server e client */
type TField = {
  name: string; // nome usado para queries
  type?: TFieldType; // tipo do dado
  required?: boolean; // não pode ser vazio
  defaultValue?: any; // valor inicial
  primaryKey?: boolean; // é chave do registro
  allowNull?: boolean; // pode ser nulo
  autoIncrement?: boolean; // é incrementado pelo banco de dados
  size?: number; // tamanho em caracteres
  scale?: number; // tamanho em decimais
};

export type TFieldClient = TField & {
  label?: string; // rotulo para usuário
  visible?: boolean; // visivel em forms e tables
  sortable?: boolean; // por ser usado para ordernar
  fieldClass?: string; // classe para o campo
  labelClass?: string; // classe para o label
};

export type TFieldServer = TField & {
  field: string; // campo no banco de dados
};

/** Tabela de banco de dados */
export type TTable = {
  database: string;
  table: string;
  fields: TFieldServer[];
};

/** Tabelas de banco de dados */
export type TDb = {
  [table: string]: TTable;
};
