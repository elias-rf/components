import { TFieldClient, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TNfCfopPk {
  cfop?: number;
}
export interface TNfCfop extends TNfCfopPk {
  descricao?: string;
  estatistica?: string;
  estoque?: string;
}

export type TNfCfopFields = keyof Required<TNfCfop>

export type TNfCfopIds = {
  [pk in keyof Required<TNfCfopPk>]: any;
};
export type TNfCfopSelect = TSelect<TNfCfopFields>;
export type TNfCfopWhere = TWhere<TNfCfopFields>;
export type TNfCfopOrder = TOrder<TNfCfopFields>;

export type TNfCfopSchema = () => Promise<TFieldClient[]>;
export type TNfCfopClear = () => Promise<TNfCfop>;
export type TNfCfopList = (args: {
  where?: TWhere<TNfCfopFields>[];
  order?: TOrder<TNfCfopFields>[];
  limit?: number;
  select?: TSelect<TNfCfopFields>;
}) => Promise<TNfCfop[]>;
export type TNfCfopRead = (args: {
  id: TNfCfopIds;
  select?: TSelect<TNfCfopFields>;
}) => Promise<TNfCfop>;

export type TNfCfopCreate = (args: {
  data: TNfCfop;
  select?: TSelect<TNfCfopFields>;
}) => Promise<TNfCfop>;
export type TNfCfopUpdate = (args: {
  id: TNfCfopIds;
  data: TNfCfop;
  select?: TSelect<TNfCfopFields>;
}) => Promise<TNfCfop>;
export type TNfCfopDel = (args: {
  id: TNfCfopIds;
}) => Promise<number>;

//#region def
//#endregion

export type TNfCfopCrud = {
  query: {
    schema: TNfCfopSchema;
    clear: TNfCfopClear;
    list: TNfCfopList;
    read: TNfCfopRead;
  };
  mutation: {
    create: TNfCfopCreate;
    update: TNfCfopUpdate;
    del: TNfCfopDel;
  };
};

export type TNfCfopModel = TNfCfopCrud & {
  //#region query
//#endregion
  //#region mutation
//#endregion
  //#region type
//#endregion
};

export type TNfCfopRpc = TNfCfopModel;
