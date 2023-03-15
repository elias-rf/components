import { TField, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
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
export type TEtiquetaExternaSelect = TSelect<TEtiquetaExternaFields>;
export type TEtiquetaExternaWhere = TWhere<TEtiquetaExternaFields>;
export type TEtiquetaExternaOrder = TOrder<TEtiquetaExternaFields>;

export type TEtiquetaExternaSchema = () => Promise<TField[]>;
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
  select?: TSelect<TEtiquetaExternaFields>;
}) => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaUpdate = (args: {
  id: TEtiquetaExternaIds;
  data: TEtiquetaExterna;
  select?: TSelect<TEtiquetaExternaFields>;
}) => Promise<TEtiquetaExterna>;
export type TEtiquetaExternaDel = (args: {
  id: TEtiquetaExternaIds;
}) => Promise<number>;

//#region def
//#endregion

export type TEtiquetaExternaCrud = {
  query: {
    schema: TEtiquetaExternaSchema;
    clear: TEtiquetaExternaClear;
    list: TEtiquetaExternaList;
    read: TEtiquetaExternaRead;
  };
  mutation: {
    create: TEtiquetaExternaCreate;
    update: TEtiquetaExternaUpdate;
    del: TEtiquetaExternaDel;
  };
};

export type TEtiquetaExternaModel = TEtiquetaExternaCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TEtiquetaExternaRpc = TEtiquetaExternaModel;
