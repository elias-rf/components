import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TFornecedorPk {
  fornecedor_id?: number;
}
export interface TFornecedor extends TFornecedorPk {
  razao_social?: string;
  nome_fantasia?: string;
  cidade?: string;
  uf?: string;
  pais_id?: number;
  cnpj?: string;
  inscricao_estadual?: string;
  is_ativo?: string;
}

export type TFornecedorFields = keyof Required<TFornecedor>;

export type TFornecedorIds = {
  [pk in keyof Required<TFornecedorPk>]: any;
};
export type TFornecedorSelect = TSelect;
export type TFornecedorWhere = TWhere;
export type TFornecedorOrder = TOrder;

export type TFornecedorSchema = () => Promise<TFieldDef[]>;
export type TFornecedorClear = () => Promise<TFornecedor>;
export type TFornecedorList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TFornecedor[]>;
export type TFornecedorRead = (args: {
  id: TFornecedorIds;
  select?: TSelect;
}) => Promise<TFornecedor>;

export type TFornecedorCreate = (args: {
  data: TFornecedor;
  select?: TSelect;
}) => Promise<TFornecedor>;
export type TFornecedorUpdate = (args: {
  id: TFornecedorIds;
  data: TFornecedor;
  select?: TSelect;
}) => Promise<TFornecedor>;
export type TFornecedorDel = (args: { id: TFornecedorIds }) => Promise<number>;

//#region def
//#endregion

export type TFornecedorCrud = {
  query: {
    schema: TFornecedorSchema;
    clear: TFornecedorClear;
    list: TFornecedorList;
    read: TFornecedorRead;
  };
  mutation: {
    create: TFornecedorCreate;
    update: TFornecedorUpdate;
    del: TFornecedorDel;
  };
};

export type TFornecedorModel = TFornecedorCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TFornecedorRpc = TFornecedorModel;
