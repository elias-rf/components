import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TProdutoPk = {
  produto_id?: number;
};
export type TProdutoCol = {
  categoria_id?: string;
  nome_comercial?: string;
  Fabricante?: string;
  OBS?: string;
  DescricaoTecnica?: string;
  DescricaoGenerica?: string;
  GrupoCredito?: string;
  fkSubCategoria?: number;
};
export type TProduto = TProdutoPk | TProdutoCol;

export type TProdutoFields =
  | keyof Required<TProdutoPk>
  | keyof Required<TProdutoCol>;

export type TProdutoIds = {
  [pk in keyof Required<TProdutoPk>]: any;
};
export type TProdutoSelect = TSelect<TProdutoFields>;
export type TProdutoWhere = TWhere<TProdutoFields>;
export type TProdutoOrder = TOrder<TProdutoFields>;

export type TProdutoSchema = () => Promise<TFieldClient[]>;
export type TProdutoClear = () => Promise<TProduto>;
export type TProdutoList = (args: {
  where?: TWhere<TProdutoFields>[];
  order?: TOrder<TProdutoFields>[];
  limit?: number;
  select?: TSelect<TProdutoFields>;
}) => Promise<TProduto[]>;
export type TProdutoRead = (args: {
  id: TProdutoIds;
  select?: TSelect<TProdutoFields>;
}) => Promise<TProduto>;

export type TProdutoCreate = (args: {
  data: TProduto;
  select?: TSelect<TProdutoFields>;
}) => Promise<TProduto>;
export type TProdutoUpdate = (args: {
  id: TProdutoIds;
  data: TProduto;
  select?: TSelect<TProdutoFields>;
}) => Promise<TProduto>;
export type TProdutoDel = (args: { id: TProdutoIds }) => Promise<number>;

export type TProdutoRpc = {
  query: {
    schema: TProdutoSchema;
    clear: TProdutoClear;
    list: TProdutoList;
    read: TProdutoRead;
  };
  mutation: {
    create: TProdutoCreate;
    update: TProdutoUpdate;
    del: TProdutoDel;
  };
};
