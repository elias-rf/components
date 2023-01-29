import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TEtiquetaInternaPk = {
  etiqueta_interna_id?: string;
};
export type TEtiquetaInternaCol = {
  produto_item_id?: number;
  data?: string;
};
export type TEtiquetaInterna = TEtiquetaInternaPk | TEtiquetaInternaCol;

export type TEtiquetaInternaFields =
  | keyof Required<TEtiquetaInternaPk>
  | keyof Required<TEtiquetaInternaCol>;

export type TEtiquetaInternaIds = {
  [pk in keyof Required<TEtiquetaInternaPk>]: any;
};
export type TEtiquetaInternaSelect = TSelect<TEtiquetaInternaFields>;
export type TEtiquetaInternaWhere = TWhere<TEtiquetaInternaFields>;
export type TEtiquetaInternaOrder = TOrder<TEtiquetaInternaFields>;

export type TEtiquetaInternaSchema = () => Promise<TFieldClient[]>;
export type TEtiquetaInternaClear = () => Promise<TEtiquetaInterna>;
export type TEtiquetaInternaList = (args: {
  where?: TWhere<TEtiquetaInternaFields>[];
  order?: TOrder<TEtiquetaInternaFields>[];
  limit?: number;
  select?: TSelect<TEtiquetaInternaFields>;
}) => Promise<TEtiquetaInterna[]>;
export type TEtiquetaInternaRead = (args: {
  id: TEtiquetaInternaIds;
  select?: TSelect<TEtiquetaInternaFields>;
}) => Promise<TEtiquetaInterna>;

export type TEtiquetaInternaCreate = (args: {
  data: TEtiquetaInterna;
}) => Promise<TEtiquetaInterna>;
export type TEtiquetaInternaUpdate = (args: {
  id: TEtiquetaInternaIds;
  data: TEtiquetaInterna;
}) => Promise<TEtiquetaInterna>;
export type TEtiquetaInternaDel = (args: {
  id: TEtiquetaInternaIds;
}) => Promise<number>;

export type TEtiquetaInternaRpc = {
  query: {
    etiquetaInternaSchema: TEtiquetaInternaSchema;
    clear: TEtiquetaInternaClear;
    list: TEtiquetaInternaList;
    read: TEtiquetaInternaRead;
  };
  mutation: {
    etiquetaInternaCreate: TEtiquetaInternaCreate;
    update: TEtiquetaInternaUpdate;
    del: TEtiquetaInternaDel;
  };
};
