import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TMaquinaPk {
  maquina_id?: number;
}
export interface TMaquina extends TMaquinaPk {
  nome?: number;
  serie?: number;
  divisao_id?: number;
  setor_id?: number;
  descricao?: number;
  frequencia?: string;
  is_ativo?: boolean;
}

export type TMaquinaFields = keyof Required<TMaquina>;

export type TMaquinaIds = {
  [pk in keyof Required<TMaquinaPk>]: any;
};
export type TMaquinaSelect = TSelect;
export type TMaquinaWhere = TWhere;
export type TMaquinaOrder = TOrder;

export type TMaquinaSchema = () => Promise<TFieldDef[]>;
export type TMaquinaClear = () => Promise<TMaquina>;
export type TMaquinaList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TMaquina[]>;
export type TMaquinaRead = (args: {
  id: TMaquinaIds;
  select?: TSelect;
}) => Promise<TMaquina>;

export type TMaquinaCreate = (args: {
  data: TMaquina;
  select?: TSelect;
}) => Promise<TMaquina>;
export type TMaquinaUpdate = (args: {
  id: TMaquinaIds;
  data: TMaquina;
  select?: TSelect;
}) => Promise<TMaquina>;
export type TMaquinaDel = (args: { id: TMaquinaIds }) => Promise<number>;

//#region def
//#endregion

export type TMaquinaCrud = {
  query: {
    schema: TMaquinaSchema;
    clear: TMaquinaClear;
    list: TMaquinaList;
    read: TMaquinaRead;
  };
  mutation: {
    create: TMaquinaCreate;
    update: TMaquinaUpdate;
    del: TMaquinaDel;
  };
};

export type TMaquinaModel = TMaquinaCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TMaquinaRpc = TMaquinaModel;
