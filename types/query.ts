import type { TGenericObject } from "./index";

/**
 * Objeto que representa filtro
 * {id:'>2', name:'A?'}
 */
export type TFilter = {
  [field: string]: string;
};

/**
 * Objeto que representa ordenação
 * {id:'asc', name:'desc'}
 */
export type TSort = {
  [field: string]: "asc" | "desc";
};

/**
 * Objeto que representa registro único
 * {nf:1, serie:'2'}
 */
export type TId = { [field: string]: any };

/** Lista de registros selecionados */
export type TSelection = TId[];

/** Registro do banco de dados */
export type TRecord = { [field: string]: any };

/**
 * Tipos para Queries
 */

/** SQL.WHERE */
export type TWhere = [string, string, any];

export type TAggregate = { [field: string]: string };
export type TIncrement = { [field: string]: number };

/** SQL.SELECT */
export type TSelect = string[];

/** SQL.ORDERBY */
export type TOrder = [string, "asc" | "desc"];

/** Array com nome dos campos chave primária */
export type TPks = string[];

/** Objeto com chave primária de um registro */
export type TSelected = { [fields: string]: any };

/** Argumentos para modelo de listagem */
export type TListArgs = {
  filter?: TFilter;
  sort?: TSort;
  limit?: number;
  select?: TSelect;
  sum?: TAggregate;
  min?: TAggregate;
  max?: TAggregate;
  group?: TSelect;
};

/** Argumentos para modelo de registro */
export type TReadArgs = { id: TId; select?: TSelect };

/** Argumentos para modelo de exclusão */
export type TDelArgs = { id: TId };

/** Argumentos para modelo de alteração */
export type TUpdateArgs = {
  id: TId;
  data: TGenericObject;
  select?: TSelect;
};

/** Argumentos para modelo de criação */
export type TCreateArgs = {
  data: TGenericObject;
  select?: TSelect;
};

export type TCountArgs = {
  filter?: TFilter;
  count?: TGenericObject;
  select?: TSelect;
};

export type TIncrementArgs = {
  filter: TFilter;
  increment: TIncrement;
  select?: TSelect;
};
