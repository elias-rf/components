import { TFieldDef, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TProdutoCategoriaPk {
  produto_categoria_id?: string;
}
export interface TProdutoCategoria extends TProdutoCategoriaPk {
  categoria?: string;
  departamento_id?: number;
}

export type TProdutoCategoriaFields = keyof Required<TProdutoCategoria>;

export type TProdutoCategoriaIds = {
  [pk in keyof Required<TProdutoCategoriaPk>]: any;
};
export type TProdutoCategoriaSelect = TSelect<TProdutoCategoriaFields>;
export type TProdutoCategoriaWhere = TWhere<TProdutoCategoriaFields>;
export type TProdutoCategoriaOrder = TOrder<TProdutoCategoriaFields>;

export type TProdutoCategoriaSchema = () => Promise<TFieldDef[]>;
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
  select?: TSelect<TProdutoCategoriaFields>;
}) => Promise<TProdutoCategoria>;
export type TProdutoCategoriaUpdate = (args: {
  id: TProdutoCategoriaIds;
  data: TProdutoCategoria;
  select?: TSelect<TProdutoCategoriaFields>;
}) => Promise<TProdutoCategoria>;
export type TProdutoCategoriaDel = (args: {
  id: TProdutoCategoriaIds;
}) => Promise<number>;

//#region def
//#endregion

export type TProdutoCategoriaCrud = {
  query: {
    schema: TProdutoCategoriaSchema;
    clear: TProdutoCategoriaClear;
    list: TProdutoCategoriaList;
    read: TProdutoCategoriaRead;
  };
  mutation: {
    create: TProdutoCategoriaCreate;
    update: TProdutoCategoriaUpdate;
    del: TProdutoCategoriaDel;
  };
};

export type TProdutoCategoriaModel = TProdutoCategoriaCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TProdutoCategoriaRpc = TProdutoCategoriaModel;
