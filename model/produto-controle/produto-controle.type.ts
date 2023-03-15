import { TField, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TProdutoControlePk {
  controle?: string;
  produto_plano_id?: string;
  fornecedor_id?: number;
}
export interface TProdutoControle extends TProdutoControlePk {
  nra_id?: string;
  data_fabricacao?: string;
  data_validade?: string;
  data_analise?: string;
  aspecto?: string;
  fator_correcao?: number;
  densidade?: number;
  percentual_diluicao?: number;
  situacao_lote?: string;
  serie_id?: string;
  quantidade_adquirida?: number;
  nota_id?: number;
  saldo_peso?: number;
  data_entrada?: string;
  data_limite_uso?: string;
  tipo_lote?: string;
  IdReduzido?: number;
  filial_id?: number;
  modelo_id?: string;
}

export type TProdutoControleFields = keyof Required<TProdutoControle>;

export type TProdutoControleIds = {
  [pk in keyof Required<TProdutoControlePk>]: any;
};
export type TProdutoControleSelect = TSelect<TProdutoControleFields>;
export type TProdutoControleWhere = TWhere<TProdutoControleFields>;
export type TProdutoControleOrder = TOrder<TProdutoControleFields>;

export type TProdutoControleSchema = () => Promise<TField[]>;
export type TProdutoControleClear = () => Promise<TProdutoControle>;
export type TProdutoControleList = (args: {
  where?: TWhere<TProdutoControleFields>[];
  order?: TOrder<TProdutoControleFields>[];
  limit?: number;
  select?: TSelect<TProdutoControleFields>;
}) => Promise<TProdutoControle[]>;
export type TProdutoControleRead = (args: {
  id: TProdutoControleIds;
  select?: TSelect<TProdutoControleFields>;
}) => Promise<TProdutoControle>;

export type TProdutoControleCreate = (args: {
  data: TProdutoControle;
  select?: TSelect<TProdutoControleFields>;
}) => Promise<TProdutoControle>;
export type TProdutoControleUpdate = (args: {
  id: TProdutoControleIds;
  data: TProdutoControle;
  select?: TSelect<TProdutoControleFields>;
}) => Promise<TProdutoControle>;
export type TProdutoControleDel = (args: {
  id: TProdutoControleIds;
}) => Promise<number>;

//#region def
//#endregion

export type TProdutoControleCrud = {
  query: {
    schema: TProdutoControleSchema;
    clear: TProdutoControleClear;
    list: TProdutoControleList;
    read: TProdutoControleRead;
  };
  mutation: {
    create: TProdutoControleCreate;
    update: TProdutoControleUpdate;
    del: TProdutoControleDel;
  };
};

export type TProdutoControleModel = TProdutoControleCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TProdutoControleRpc = TProdutoControleModel;
