import { TFieldClient, TOrder, TSelect, TWhere } from "../../types";
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

export type TMaquinaFields = keyof Required<TMaquina>

export type TMaquinaIds = {
  [pk in keyof Required<TMaquinaPk>]: any;
};
export type TMaquinaSelect = TSelect<TMaquinaFields>;
export type TMaquinaWhere = TWhere<TMaquinaFields>;
export type TMaquinaOrder = TOrder<TMaquinaFields>;

export type TMaquinaSchema = () => Promise<TFieldClient[]>;
export type TMaquinaClear = () => Promise<TMaquina>;
export type TMaquinaList = (args: {
  where?: TWhere<TMaquinaFields>[];
  order?: TOrder<TMaquinaFields>[];
  limit?: number;
  select?: TSelect<TMaquinaFields>;
}) => Promise<TMaquina[]>;
export type TMaquinaRead = (args: {
  id: TMaquinaIds;
  select?: TSelect<TMaquinaFields>;
}) => Promise<TMaquina>;

export type TMaquinaCreate = (args: {
  data: TMaquina;
  select?: TSelect<TMaquinaFields>;
}) => Promise<TMaquina>;
export type TMaquinaUpdate = (args: {
  id: TMaquinaIds;
  data: TMaquina;
  select?: TSelect<TMaquinaFields>;
}) => Promise<TMaquina>;
export type TMaquinaDel = (args: {
  id: TMaquinaIds;
}) => Promise<number>;

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
