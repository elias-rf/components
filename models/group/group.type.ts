import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TGrupoPk {
  nome_grupo?: string;
  uf_old?: string;
}
export interface TGrupo extends TGrupoPk {
  grupo_id?: string;
  uf_id?: number;
  uf?: string;
}

export type TGrupoFields = keyof Required<TGrupo>;

export type TGrupoIds = {
  [pk in keyof Required<TGrupoPk>]: any;
};
export type TGrupoSelect = TSelect;
export type TGrupoWhere = TWhere;
export type TGrupoOrder = TOrder;

export type TGrupoSchema = () => Promise<TFieldDef[]>;
export type TGrupoClear = () => Promise<TGrupo>;
export type TGrupoList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TGrupo[]>;
export type TGrupoRead = (args: {
  id: TGrupoIds;
  select?: TSelect;
}) => Promise<TGrupo>;

export type TGrupoCreate = (args: {
  data: TGrupo;
  select?: TSelect;
}) => Promise<TGrupo>;
export type TGrupoUpdate = (args: {
  id: TGrupoIds;
  data: TGrupo;
  select?: TSelect;
}) => Promise<TGrupo>;
export type TGrupoDel = (args: { id: TGrupoIds }) => Promise<number>;

//#region def
//#endregion

export type TGrupoCrud = {
  query: {
    schema: TGrupoSchema;
    clear: TGrupoClear;
    list: TGrupoList;
    read: TGrupoRead;
  };
  mutation: {
    create: TGrupoCreate;
    update: TGrupoUpdate;
    del: TGrupoDel;
  };
};

export type TGrupoModel = TGrupoCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TGrupoRpc = TGrupoModel;
