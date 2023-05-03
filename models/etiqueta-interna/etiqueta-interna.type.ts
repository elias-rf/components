import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TEtiquetaInternaPk {
  etiqueta_interna_id?: string;
}
export interface TEtiquetaInterna extends TEtiquetaInternaPk {
  produto_item_id?: number;
  data?: string;
}

export type TEtiquetaInternaFields = keyof Required<TEtiquetaInterna>;

export type TEtiquetaInternaIds = {
  [pk in keyof Required<TEtiquetaInternaPk>]: any;
};
export type TEtiquetaInternaSelect = TSelect<TEtiquetaInternaFields>;
export type TEtiquetaInternaWhere = TWhere<TEtiquetaInternaFields>;
export type TEtiquetaInternaOrder = TOrder<TEtiquetaInternaFields>;

export type TEtiquetaInternaSchema = () => Promise<TFieldDef[]>;
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
  select?: TSelect<TEtiquetaInternaFields>;
}) => Promise<TEtiquetaInterna>;
export type TEtiquetaInternaUpdate = (args: {
  id: TEtiquetaInternaIds;
  data: TEtiquetaInterna;
  select?: TSelect<TEtiquetaInternaFields>;
}) => Promise<TEtiquetaInterna>;
export type TEtiquetaInternaDel = (args: {
  id: TEtiquetaInternaIds;
}) => Promise<number>;

//#region def
//#endregion

export type TEtiquetaInternaCrud = {
  query: {
    schema: TEtiquetaInternaSchema;
    clear: TEtiquetaInternaClear;
    list: TEtiquetaInternaList;
    read: TEtiquetaInternaRead;
  };
  mutation: {
    create: TEtiquetaInternaCreate;
    update: TEtiquetaInternaUpdate;
    del: TEtiquetaInternaDel;
  };
};

export type TEtiquetaInternaModel = TEtiquetaInternaCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TEtiquetaInternaRpc = TEtiquetaInternaModel;
