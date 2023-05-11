import type { TGenericObject } from "./index";

export type TFilter = {
  id: string;
  value: string;
};

export type TFilters = TFilter[];

export type TSort = {
  id: string;
  desc: boolean;
};

export type TSorts = TSort[];

/** Lista de registros selecionados */
export type TSelection = Record<string, boolean>;

/** Objeto que representa registro único */
export type TId = { id: string; value: any };
export type TIds = TId[];

/**
 * Tipos para Queries
 */

/** SQL.WHERE */
export type TWhere = [string, string, any];

export type TAggregate = { id: string; label: string };
export type TIncrement = { id: string; value: number };

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
  limit?: number;
  filters?: TFilters;
  sorts?: TSorts;
  select?: TSelect;
  sum?: TAggregate;
  min?: TAggregate;
  max?: TAggregate;
  group?: TSelect;
};

/** Argumentos para modelo de registro */
export type TReadArgs = { ids: TIds; select?: TSelect };

/** Argumentos para modelo de exclusão */
export type TDelArgs = { ids: TIds };

/** Argumentos para modelo de alteração */
export type TUpdateArgs = {
  ids: TIds;
  data: TGenericObject;
  select?: TSelect;
};

/** Argumentos para modelo de criação */
export type TCreateArgs = {
  data: TGenericObject;
  select?: TSelect;
};

export type TCountArgs = {
  filters?: TFilters;
  count?: TGenericObject;
  select?: TSelect;
};

export type TIncrementArgs = {
  filters?: TFilters;
  increment?: TIncrement;
  select?: TSelect;
};
