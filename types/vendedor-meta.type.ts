import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TVendedorMetaPk = {
  id?: number;
};
export type TVendedorMetaCol = {
  uf?: string;
  meta?: number;
};
export type TVendedorMeta = TVendedorMetaPk | TVendedorMetaCol;

export type TVendedorMetaFields =
  | keyof Required<TVendedorMetaPk>
  | keyof Required<TVendedorMetaCol>;

export type TVendedorMetaIds = {
  [pk in keyof Required<TVendedorMetaPk>]: any;
};
export type TVendedorMetaSelect = TSelect<TVendedorMetaFields>;
export type TVendedorMetaWhere = TWhere<TVendedorMetaFields>;
export type TVendedorMetaOrder = TOrder<TVendedorMetaFields>;

export type TVendedorMetaSchema = () => Promise<TFieldClient[]>;
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
}) => Promise<TVendedorMeta>;
export type TVendedorMetaUpdate = (args: {
  id: TVendedorMetaIds;
  data: TVendedorMeta;
}) => Promise<TVendedorMeta>;
export type TVendedorMetaDel = (args: {
  id: TVendedorMetaIds;
}) => Promise<number>;

export type TVendedorMetaRpc = {
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
