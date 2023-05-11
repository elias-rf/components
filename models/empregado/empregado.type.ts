import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@/types";
import { TConnection } from "../../config/connections";

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
export type TEmpregadoSelect = TSelect;
export type TEmpregadoWhere = TWhere;
export type TEmpregadoOrder = TOrder;

export type TEmpregadoSchema = () => Promise<TFieldDef[]>;
export type TEmpregadoClear = () => Promise<TEmpregado>;
export type TEmpregadoList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TEmpregado[]>;
export type TEmpregadoRead = (args: {
  id: TEmpregadoIds;
  select?: TSelect;
}) => Promise<TEmpregado>;

export type TEmpregadoCreate = (args: {
  data: TEmpregado;
  select?: TSelect;
}) => Promise<TEmpregado>;
export type TEmpregadoUpdate = (args: {
  id: TEmpregadoIds;
  data: TEmpregado;
  select?: TSelect;
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
