import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TFornecedorPk = {
  fornecedor_id?: number;
};
export type TFornecedorCol = {
  razao_social?: string;
  nome_fantasia?: string;
  cidade?: string;
  uf?: string;
  pais_id?: number;
  cnpj?: string;
  inscricao_estadual?: string;
  is_ativo?: string;
};
export type TFornecedor = TFornecedorPk | TFornecedorCol;

export type TFornecedorFields =
  | keyof Required<TFornecedorPk>
  | keyof Required<TFornecedorCol>;

export type TFornecedorIds = {
  [pk in keyof Required<TFornecedorPk>]: any;
};
export type TFornecedorSelect = TSelect<TFornecedorFields>;
export type TFornecedorWhere = TWhere<TFornecedorFields>;
export type TFornecedorOrder = TOrder<TFornecedorFields>;

export type TFornecedorSchema = () => Promise<TFieldClient[]>;
export type TFornecedorClear = () => Promise<TFornecedor>;
export type TFornecedorList = (args: {
  where?: TWhere<TFornecedorFields>[];
  order?: TOrder<TFornecedorFields>[];
  limit?: number;
  select?: TSelect<TFornecedorFields>;
}) => Promise<TFornecedor[]>;
export type TFornecedorRead = (args: {
  id: TFornecedorIds;
  select?: TSelect<TFornecedorFields>;
}) => Promise<TFornecedor>;

export type TFornecedorCreate = (args: {
  data: TFornecedor;
}) => Promise<TFornecedor>;
export type TFornecedorUpdate = (args: {
  id: TFornecedorIds;
  data: TFornecedor;
}) => Promise<TFornecedor>;
export type TFornecedorDel = (args: { id: TFornecedorIds }) => Promise<number>;

export type TFornecedorRpc = {
  query: {
    fornecedorSchema: TFornecedorSchema;
    clear: TFornecedorClear;
    list: TFornecedorList;
    read: TFornecedorRead;
  };
  mutation: {
    fornecedorCreate: TFornecedorCreate;
    update: TFornecedorUpdate;
    del: TFornecedorDel;
  };
};
