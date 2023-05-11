import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TOperacaoProducaoPk {
  operacao_producao_id?: number;
}
export interface TOperacaoProducao extends TOperacaoProducaoPk {
  operacao?: string;
  eh_retrabalho?: number;
  especial?: number;
  descricao?: string;
  amostragem?: number;
}

export type TOperacaoProducaoFields = keyof Required<TOperacaoProducao>;

export type TOperacaoProducaoIds = {
  [pk in keyof Required<TOperacaoProducaoPk>]: any;
};
export type TOperacaoProducaoSelect = TSelect;
export type TOperacaoProducaoWhere = TWhere;
export type TOperacaoProducaoOrder = TOrder;

export type TOperacaoProducaoSchema = () => Promise<TFieldDef[]>;
export type TOperacaoProducaoClear = () => Promise<TOperacaoProducao>;
export type TOperacaoProducaoList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TOperacaoProducao[]>;
export type TOperacaoProducaoRead = (args: {
  id: TOperacaoProducaoIds;
  select?: TSelect;
}) => Promise<TOperacaoProducao>;

export type TOperacaoProducaoCreate = (args: {
  data: TOperacaoProducao;
  select?: TSelect;
}) => Promise<TOperacaoProducao>;
export type TOperacaoProducaoUpdate = (args: {
  id: TOperacaoProducaoIds;
  data: TOperacaoProducao;
  select?: TSelect;
}) => Promise<TOperacaoProducao>;
export type TOperacaoProducaoDel = (args: {
  id: TOperacaoProducaoIds;
}) => Promise<number>;

//#region def
//#endregion

export type TOperacaoProducaoCrud = {
  query: {
    schema: TOperacaoProducaoSchema;
    clear: TOperacaoProducaoClear;
    list: TOperacaoProducaoList;
    read: TOperacaoProducaoRead;
  };
  mutation: {
    create: TOperacaoProducaoCreate;
    update: TOperacaoProducaoUpdate;
    del: TOperacaoProducaoDel;
  };
};

export type TOperacaoProducaoModel = TOperacaoProducaoCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TOperacaoProducaoRpc = TOperacaoProducaoModel;
