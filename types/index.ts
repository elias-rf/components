export * from "./model";
export * from "./query";

/** Dados do usuário logado */
export type TCurrentUser = {
  usuario_id?: number;
  nome_login?: string;
  nome?: string;
  group_id?: string;
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
export type TGenericObject = Record<string, any>;

/** Registro genérico */
export type TUnknownObject = Record<PropertyKey, unknown>;

/** Array genérico */
export type TUnknownArray = unknown[];

/** Dados para component arvore */
export type TreeData = {
  key: string;
  label: string;
  child?: TreeData;
}[];
