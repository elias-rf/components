import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TProdutoPk {
  produto_id?: number;
}
export interface TProduto extends TProdutoPk {
  categoria_id?: string;
  nome_comercial?: string;
  Fabricante?: string;
  OBS?: string;
  DescricaoTecnica?: string;
  DescricaoGenerica?: string;
  GrupoCredito?: string;
  fkSubCategoria?: number;
}

export type TProdutoFields = keyof Required<TProduto>;

export type TProdutoIds = {
  [pk in keyof Required<TProdutoPk>]: any;
};
export type TProdutoSelect = TSelect;
export type TProdutoWhere = TWhere;
export type TProdutoOrder = TOrder;

export type TProdutoSchema = () => Promise<TFieldDef[]>;
export type TProdutoClear = () => Promise<TProduto>;
export type TProdutoList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TProduto[]>;
export type TProdutoRead = (args: {
  id: TProdutoIds;
  select?: TSelect;
}) => Promise<TProduto>;

export type TProdutoCreate = (args: {
  data: TProduto;
  select?: TSelect;
}) => Promise<TProduto>;
export type TProdutoUpdate = (args: {
  id: TProdutoIds;
  data: TProduto;
  select?: TSelect;
}) => Promise<TProduto>;
export type TProdutoDel = (args: { id: TProdutoIds }) => Promise<number>;

//#region def
//#endregion

export type TProdutoCrud = {
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

export type TProdutoModel = TProdutoCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TProdutoRpc = TProdutoModel;
