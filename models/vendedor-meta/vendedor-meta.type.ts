import { TFieldDef, TOrder, TSelect, TWhere } from "@mono/types";
//#region import
//#endregion
export interface TVendedorMetaPk {
  vendedor_id?: number;
}
export interface TVendedorMeta extends TVendedorMetaPk {
  uf?: string;
  meta?: number;
}

export type TVendedorMetaFields = keyof Required<TVendedorMeta>;

export type TVendedorMetaIds = {
  [pk in keyof Required<TVendedorMetaPk>]: any;
};
export type TVendedorMetaSelect = TSelect<TVendedorMetaFields>;
export type TVendedorMetaWhere = TWhere<TVendedorMetaFields>;
export type TVendedorMetaOrder = TOrder<TVendedorMetaFields>;

export type TVendedorMetaSchema = () => Promise<TFieldDef[]>;
export type TVendedorMetaClear = () => Promise<TVendedorMeta>;
export type TVendedorMetaList = (args: {
  where?: TWhere<TVendedorMetaFields>[];
  order?: TOrder<TVendedorMetaFields>[];
  limit?: number;
  select?: TSelect<TVendedorMetaFields>;
}) => Promise<TVendedorMeta[]>;
export type TVendedorMetaRead = (args: {
  id: TVendedorMetaIds;
  select?: TSelect<TVendedorMetaFields>;
}) => Promise<TVendedorMeta>;

export type TVendedorMetaCreate = (args: {
  data: TVendedorMeta;
  select?: TSelect<TVendedorMetaFields>;
}) => Promise<TVendedorMeta>;
export type TVendedorMetaUpdate = (args: {
  id: TVendedorMetaIds;
  data: TVendedorMeta;
  select?: TSelect<TVendedorMetaFields>;
}) => Promise<TVendedorMeta>;
export type TVendedorMetaDel = (args: {
  id: TVendedorMetaIds;
}) => Promise<number>;

//#region def
//#endregion

export type TVendedorMetaCrud = {
  query: {
    schema: TVendedorMetaSchema;
    clear: TVendedorMetaClear;
    list: TVendedorMetaList;
    read: TVendedorMetaRead;
  };
  mutation: {
    create: TVendedorMetaCreate;
    update: TVendedorMetaUpdate;
    del: TVendedorMetaDel;
  };
};

export type TVendedorMetaModel = TVendedorMetaCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TVendedorMetaRpc = TVendedorMetaModel;
