import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@/types";
import { TConnection } from "../../config/connections";

export interface TDiamantePk {
  diamante_id?: string;
}
export interface TDiamante extends TDiamantePk {
  diamante?: string;
  tipo?: string;
  raio?: number;
  espessura?: number;
  maquina_id?: number;
  empregado_id?: number;
  data_entrada?: string;
  op_id_inicial?: number;
  data_saida?: string;
  op_id_final?: number;
  quantidade_corte?: number;
}

export type TDiamanteFields = keyof Required<TDiamante>;

export type TDiamanteIds = {
  [pk in keyof Required<TDiamantePk>]: any;
};
export type TDiamanteSelect = TSelect;
export type TDiamanteWhere = TWhere;
export type TDiamanteOrder = TOrder;

export type TDiamanteSchema = () => Promise<TFieldDef[]>;
export type TDiamanteClear = () => Promise<TDiamante>;
export type TDiamanteList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TDiamante[]>;
export type TDiamanteRead = (args: {
  id: TDiamanteIds;
  select?: TSelect;
}) => Promise<TDiamante>;

export type TDiamanteCreate = (args: {
  data: TDiamante;
  select?: TSelect;
}) => Promise<TDiamante>;
export type TDiamanteUpdate = (args: {
  id: TDiamanteIds;
  data: TDiamante;
  select?: TSelect;
}) => Promise<TDiamante>;
export type TDiamanteDel = (args: { id: TDiamanteIds }) => Promise<number>;

//#region def
//#endregion

export type TDiamanteModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TDiamanteList;
    read: TDiamanteRead;
  };
  mutation: {
    create: TDiamanteCreate;
    update: TDiamanteUpdate;
    del: TDiamanteDel;
  };
};

export type TDiamanteRpc = TDiamanteModel;
