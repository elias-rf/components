import { TField, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TVendedorPk {
  vendedor_id?: number;
}
export interface TVendedor extends TVendedorPk {
  vendedor?: string;
  endereco?: string;
  cidade?: string;
  uf?: string;
  cpf?: number;
  identidade?: string;
  telefone?: string;
  eh_controle?: string;
  meta?: number;
  venda?: number;
  ComissaoAV?: number;
  ComissaoPZ?: number;
  DtUltAlteracao?: string;
  cargo?: string;
  PercLimiteComissao?: number;
  eh_ativo?: string;
  bairro?: string;
  TelefoneAdicional?: string;
  email?: string;
  PercComissaoVarejoVista?: number;
  PercComissaoAtacadoVista?: number;
  PercComissaoVarejoPrazo?: number;
  PercComissaoAtacadoPrazo?: number;
  cep?: number;
  NmFantasia?: string;
  FgFuncionarioOS?: string;
  FgTecnicoOS?: string;
}

export type TVendedorFields = keyof Required<TVendedor>;

export type TVendedorIds = {
  [pk in keyof Required<TVendedorPk>]: any;
};
export type TVendedorSelect = TSelect<TVendedorFields>;
export type TVendedorWhere = TWhere<TVendedorFields>;
export type TVendedorOrder = TOrder<TVendedorFields>;

export type TVendedorSchema = () => Promise<TField[]>;
export type TVendedorClear = () => Promise<TVendedor>;
export type TVendedorList = (args: {
  where?: TWhere<TVendedorFields>[];
  order?: TOrder<TVendedorFields>[];
  limit?: number;
  select?: TSelect<TVendedorFields>;
}) => Promise<TVendedor[]>;
export type TVendedorRead = (args: {
  id: TVendedorIds;
  select?: TSelect<TVendedorFields>;
}) => Promise<TVendedor>;

export type TVendedorCreate = (args: {
  data: TVendedor;
  select?: TSelect<TVendedorFields>;
}) => Promise<TVendedor>;
export type TVendedorUpdate = (args: {
  id: TVendedorIds;
  data: TVendedor;
  select?: TSelect<TVendedorFields>;
}) => Promise<TVendedor>;
export type TVendedorDel = (args: { id: TVendedorIds }) => Promise<number>;

//#region def
//#endregion

export type TVendedorCrud = {
  query: {
    schema: TVendedorSchema;
    clear: TVendedorClear;
    list: TVendedorList;
    read: TVendedorRead;
  };
  mutation: {
    create: TVendedorCreate;
    update: TVendedorUpdate;
    del: TVendedorDel;
  };
};

export type TVendedorModel = TVendedorCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TVendedorRpc = TVendedorModel;
