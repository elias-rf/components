import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@/types";
import { TConnection } from "../../config/connections";

export interface TEtiquetaExternaPk {
  etiqueta_externa_id?: string;
}
export interface TEtiquetaExterna extends TEtiquetaExternaPk {
  quantidade?: number;
  data_fabricacao?: string;
}

export type TEtiquetaExternaFields = keyof Required<TEtiquetaExterna>;

export type TEtiquetaExternaIds = {
  [pk in keyof Required<TEtiquetaExternaPk>]: any;
};
export type TEtiquetaExternaSelect = TSelect;
export type TEtiquetaExternaWhere = TWhere;
export type TEtiquetaExternaOrder = TOrder;

export type TEtiquetaExternaSchema = () => Promise<TFieldDef[]>;
export type TEtiquetaExternaClear = () => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TEtiquetaExterna[]>;
export type TEtiquetaExternaRead = (args: {
  id: TEtiquetaExternaIds;
  select?: TSelect;
}) => Promise<TEtiquetaExterna>;

export type TEtiquetaExternaCreate = (args: {
  data: TEtiquetaExterna;
  select?: TSelect;
}) => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaUpdate = (args: {
  id: TEtiquetaExternaIds;
  data: TEtiquetaExterna;
  select?: TSelect;
}) => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaDel = (args: {
  id: TEtiquetaExternaIds;
}) => Promise<number>;

export type TEtiquetaExternaModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TEtiquetaExternaList;
    read: TEtiquetaExternaRead;
  };
  mutation: {
    create: TEtiquetaExternaCreate;
    update: TEtiquetaExternaUpdate;
    del: TEtiquetaExternaDel;
  };
};

export type TEtiquetaExternaRpc = TEtiquetaExternaModel;
