import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TDiamantePk = {
  diamante_id?: string;
};
export type TDiamanteCol = {
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
};
export type TDiamante = TDiamantePk | TDiamanteCol;

export type TDiamanteFields =
  | keyof Required<TDiamantePk>
  | keyof Required<TDiamanteCol>;

export type TDiamanteIds = {
  [pk in keyof Required<TDiamantePk>]: any;
};
export type TDiamanteSelect = TSelect<TDiamanteFields>;
export type TDiamanteWhere = TWhere<TDiamanteFields>;
export type TDiamanteOrder = TOrder<TDiamanteFields>;

export type TDiamanteSchema = () => Promise<TFieldClient[]>;
export type TDiamanteClear = () => Promise<TDiamante>;
export type TDiamanteList = (args: {
  where?: TWhere<TDiamanteFields>[];
  order?: TOrder<TDiamanteFields>[];
  limit?: number;
  select?: TSelect<TDiamanteFields>;
}) => Promise<TDiamante[]>;
export type TDiamanteRead = (args: {
  id: TDiamanteIds;
  select?: TSelect<TDiamanteFields>;
}) => Promise<TDiamante>;

export type TDiamanteCreate = (args: { data: TDiamante }) => Promise<TDiamante>;
export type TDiamanteUpdate = (args: {
  id: TDiamanteIds;
  data: TDiamante;
}) => Promise<TDiamante>;
export type TDiamanteDel = (args: { id: TDiamanteIds }) => Promise<number>;

export type TDiamanteRpc = {
  query: {
    schema: TDiamanteSchema;
    clear: TDiamanteClear;
    list: TDiamanteList;
    read: TDiamanteRead;
  };
  mutation: {
    create: TDiamanteCreate;
    update: TDiamanteUpdate;
    del: TDiamanteDel;
  };
};
