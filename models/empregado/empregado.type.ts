import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@mono/types";
import { TConnection } from "../connections";

export interface TEmpregadoPk {
  empregado_id?: number;
}
export interface TEmpregado extends TEmpregadoPk {
  empresa_id?: number;
  nome?: string;
  identidade?: string;
  funcao?: string;
  afastado?: number;
  setor?: string;
}

export type TEmpregadoFields = keyof Required<TEmpregado>;

export type TEmpregadoIds = {
  [pk in keyof Required<TEmpregadoPk>]: any;
};
export type TEmpregadoSelect = TSelect<TEmpregadoFields>;
export type TEmpregadoWhere = TWhere<TEmpregadoFields>;
export type TEmpregadoOrder = TOrder<TEmpregadoFields>;

export type TEmpregadoSchema = () => Promise<TFieldDef[]>;
export type TEmpregadoClear = () => Promise<TEmpregado>;
export type TEmpregadoList = (args: {
  where?: TWhere<TEmpregadoFields>[];
  order?: TOrder<TEmpregadoFields>[];
  limit?: number;
  select?: TSelect<TEmpregadoFields>;
}) => Promise<TEmpregado[]>;
export type TEmpregadoRead = (args: {
  id: TEmpregadoIds;
  select?: TSelect<TEmpregadoFields>;
}) => Promise<TEmpregado>;

export type TEmpregadoCreate = (args: {
  data: TEmpregado;
  select?: TSelect<TEmpregadoFields>;
}) => Promise<TEmpregado>;
export type TEmpregadoUpdate = (args: {
  id: TEmpregadoIds;
  data: TEmpregado;
  select?: TSelect<TEmpregadoFields>;
}) => Promise<TEmpregado>;
export type TEmpregadoDel = (args: { id: TEmpregadoIds }) => Promise<number>;

export type TEmpregadoModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TEmpregadoList;
    read: TEmpregadoRead;
  };
  mutation: {
    create: TEmpregadoCreate;
    update: TEmpregadoUpdate;
    del: TEmpregadoDel;
  };
};
