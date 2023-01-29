import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TEtiquetaExternaPk = {
  etiqueta_externa_id?: string;
};
export type TEtiquetaExternaCol = {
  quantidade?: number;
  data_fabricacao?: string;
};
export type TEtiquetaExterna = TEtiquetaExternaPk | TEtiquetaExternaCol;

export type TEtiquetaExternaFields =
  | keyof Required<TEtiquetaExternaPk>
  | keyof Required<TEtiquetaExternaCol>;

export type TEtiquetaExternaIds = {
  [pk in keyof Required<TEtiquetaExternaPk>]: any;
};
export type TEtiquetaExternaSelect = TSelect<TEtiquetaExternaFields>;
export type TEtiquetaExternaWhere = TWhere<TEtiquetaExternaFields>;
export type TEtiquetaExternaOrder = TOrder<TEtiquetaExternaFields>;

export type TEtiquetaExternaSchema = () => Promise<TFieldClient[]>;
export type TEtiquetaExternaClear = () => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaList = (args: {
  where?: TWhere<TEtiquetaExternaFields>[];
  order?: TOrder<TEtiquetaExternaFields>[];
  limit?: number;
  select?: TSelect<TEtiquetaExternaFields>;
}) => Promise<TEtiquetaExterna[]>;
export type TEtiquetaExternaRead = (args: {
  id: TEtiquetaExternaIds;
  select?: TSelect<TEtiquetaExternaFields>;
}) => Promise<TEtiquetaExterna>;

export type TEtiquetaExternaCreate = (args: {
  data: TEtiquetaExterna;
}) => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaUpdate = (args: {
  id: TEtiquetaExternaIds;
  data: TEtiquetaExterna;
}) => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaDel = (args: {
  id: TEtiquetaExternaIds;
}) => Promise<number>;

export type TEtiquetaExternaRpc = {
  query: {
    etiquetaExternaSchema: TEtiquetaExternaSchema;
    clear: TEtiquetaExternaClear;
    list: TEtiquetaExternaList;
    read: TEtiquetaExternaRead;
  };
  mutation: {
    etiquetaExternaCreate: TEtiquetaExternaCreate;
    update: TEtiquetaExternaUpdate;
    del: TEtiquetaExternaDel;
  };
};
