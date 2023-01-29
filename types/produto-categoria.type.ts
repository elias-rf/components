import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TProdutoCategoriaPk = {
  CategPro_id?: string;
};
export type TProdutoCategoriaCol = {
  NmCategoria?: string;
  CdDepartamento?: number;
  FgListaPreco?: string;
  DtUltAlteracao?: string;
  Mensagem?: string;
  PercDescMaxGerente?: number;
  PercDescMaxVendedor?: number;
};
export type TProdutoCategoria = TProdutoCategoriaPk | TProdutoCategoriaCol;

export type TProdutoCategoriaFields =
  | keyof Required<TProdutoCategoriaPk>
  | keyof Required<TProdutoCategoriaCol>;

export type TProdutoCategoriaIds = {
  [pk in keyof Required<TProdutoCategoriaPk>]: any;
};
export type TProdutoCategoriaSelect = TSelect<TProdutoCategoriaFields>;
export type TProdutoCategoriaWhere = TWhere<TProdutoCategoriaFields>;
export type TProdutoCategoriaOrder = TOrder<TProdutoCategoriaFields>;

export type TProdutoCategoriaSchema = () => Promise<TFieldClient[]>;
export type TProdutoCategoriaClear = () => Promise<TProdutoCategoria>;
export type TProdutoCategoriaList = (args: {
  where?: TWhere<TProdutoCategoriaFields>[];
  order?: TOrder<TProdutoCategoriaFields>[];
  limit?: number;
  select?: TSelect<TProdutoCategoriaFields>;
}) => Promise<TProdutoCategoria[]>;
export type TProdutoCategoriaRead = (args: {
  id: TProdutoCategoriaIds;
  select?: TSelect<TProdutoCategoriaFields>;
}) => Promise<TProdutoCategoria>;

export type TProdutoCategoriaCreate = (args: {
  data: TProdutoCategoria;
}) => Promise<TProdutoCategoria>;
export type TProdutoCategoriaUpdate = (args: {
  id: TProdutoCategoriaIds;
  data: TProdutoCategoria;
}) => Promise<TProdutoCategoria>;
export type TProdutoCategoriaDel = (args: {
  id: TProdutoCategoriaIds;
}) => Promise<number>;

export type TProdutoCategoriaRpc = {
  query: {
    produtoCategoriaSchema: TProdutoCategoriaSchema;
    clear: TProdutoCategoriaClear;
    list: TProdutoCategoriaList;
    read: TProdutoCategoriaRead;
  };
  mutation: {
    produtoCategoriaCreate: TProdutoCategoriaCreate;
    update: TProdutoCategoriaUpdate;
    del: TProdutoCategoriaDel;
  };
};
