import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
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

export type TNfCfopFields = keyof Required<TNfCfop>;

export type TNfCfopIds = {
  [pk in keyof Required<TNfCfopPk>]: any;
};
export type TNfCfopSelect = TSelect;
export type TNfCfopWhere = TWhere;
export type TNfCfopOrder = TOrder;

export type TNfCfopSchema = () => Promise<TFieldDef[]>;
export type TNfCfopClear = () => Promise<TNfCfop>;
export type TNfCfopList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TNfCfop[]>;
export type TNfCfopRead = (args: {
  id: TNfCfopIds;
  select?: TSelect;
}) => Promise<TNfCfop>;

export type TNfCfopCreate = (args: {
  data: TNfCfop;
  select?: TSelect;
}) => Promise<TNfCfop>;
export type TNfCfopUpdate = (args: {
  id: TNfCfopIds;
  data: TNfCfop;
  select?: TSelect;
}) => Promise<TNfCfop>;
export type TNfCfopDel = (args: { id: TNfCfopIds }) => Promise<number>;

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
