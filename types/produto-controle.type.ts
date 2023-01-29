import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TProdutoControlePk = {
  controle?: string;
  produto_id?: string;
  fornecedor_id?: number;
};
export type TProdutoControleCol = {
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
};
export type TProdutoControle = TProdutoControlePk | TProdutoControleCol;

export type TProdutoControleFields =
  | keyof Required<TProdutoControlePk>
  | keyof Required<TProdutoControleCol>;

export type TProdutoControleIds = {
  [pk in keyof Required<TProdutoControlePk>]: any;
};
export type TProdutoControleSelect = TSelect<TProdutoControleFields>;
export type TProdutoControleWhere = TWhere<TProdutoControleFields>;
export type TProdutoControleOrder = TOrder<TProdutoControleFields>;

export type TProdutoControleSchema = () => Promise<TFieldClient[]>;
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
}) => Promise<TProdutoControle>;
export type TProdutoControleUpdate = (args: {
  id: TProdutoControleIds;
  data: TProdutoControle;
}) => Promise<TProdutoControle>;
export type TProdutoControleDel = (args: {
  id: TProdutoControleIds;
}) => Promise<number>;

export type TProdutoControleRpc = {
  query: {
    produtoControleSchema: TProdutoControleSchema;
    clear: TProdutoControleClear;
    list: TProdutoControleList;
    read: TProdutoControleRead;
  };
  mutation: {
    produtoControleCreate: TProdutoControleCreate;
    update: TProdutoControleUpdate;
    del: TProdutoControleDel;
  };
};
