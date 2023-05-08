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

export type TSelection = {
  [key: string]: boolean;
};

/**
 * Tipos para Queries
 */

/** SQL.WHERE */
export type TWhere<Fields = string> = [Fields, string, any];

export type TAggregate<Fields = string> = { [fieldName: string]: Fields };

/** SQL.SELECT */
export type TSelect<Fields = string> = Fields[];

/** SQL.ORDERBY */
export type TOrder<Fields = string> = [Fields, "asc" | "desc"];

/** Array com nome dos campos chave primária */
export type TPks = string[];

/** Objeto que representa registro único */
export type TIds = { [fields: string]: any };

/** Objeto com chave primária de um registro */
export type TSelected = { [fields: string]: any };

/** Argumentos para modelo de listagem */
export type TListArgs = {
  limit?: number;
  where?: TFilters;
  order?: TSorts;
  select?: TSelect;
  sum?: TAggregate;
  min?: TAggregate;
  max?: TAggregate;
  group?: TSelect;
};

/** Argumentos para modelo de registro */
export type TReadArgs = { id: TIds; select?: TSelect };

/** Argumentos para modelo de exclusão */
export type TDelArgs = { id: TIds };

/** Argumentos para modelo de alteração */
export type TUpdateArgs = {
  id: TIds;
  data: TGenericObject;
  select?: TSelect;
};

/** Argumentos para modelo de criação */
export type TCreateArgs = {
  data: TGenericObject;
  select?: TSelect;
};
