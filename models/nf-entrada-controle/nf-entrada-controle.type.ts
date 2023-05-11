import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TNfEntradaControlePk {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
  modelo_id?: string;
}
export interface TNfEntradaControle extends TNfEntradaControlePk {
  fornecedor_id?: number;
  produto_plano_id?: string;
  controle?: string;
  quantidade?: number;
}

export type TNfEntradaControleFields = keyof Required<TNfEntradaControle>;

export type TNfEntradaControleIds = {
  [pk in keyof Required<TNfEntradaControlePk>]: any;
};
export type TNfEntradaControleSelect = TSelect;
export type TNfEntradaControleWhere = TWhere;
export type TNfEntradaControleOrder = TOrder;

export type TNfEntradaControleSchema = () => Promise<TFieldDef[]>;
export type TNfEntradaControleClear = () => Promise<TNfEntradaControle>;
export type TNfEntradaControleList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TNfEntradaControle[]>;
export type TNfEntradaControleRead = (args: {
  id: TNfEntradaControleIds;
  select?: TSelect;
}) => Promise<TNfEntradaControle>;

export type TNfEntradaControleCreate = (args: {
  data: TNfEntradaControle;
  select?: TSelect;
}) => Promise<TNfEntradaControle>;
export type TNfEntradaControleUpdate = (args: {
  id: TNfEntradaControleIds;
  data: TNfEntradaControle;
  select?: TSelect;
}) => Promise<TNfEntradaControle>;
export type TNfEntradaControleDel = (args: {
  id: TNfEntradaControleIds;
}) => Promise<number>;

//#region def
//#endregion

export type TNfEntradaControleCrud = {
  query: {
    schema: TNfEntradaControleSchema;
    clear: TNfEntradaControleClear;
    list: TNfEntradaControleList;
    read: TNfEntradaControleRead;
  };
  mutation: {
    create: TNfEntradaControleCreate;
    update: TNfEntradaControleUpdate;
    del: TNfEntradaControleDel;
  };
};

export type TNfEntradaControleModel = TNfEntradaControleCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TNfEntradaControleRpc = TNfEntradaControleModel;
