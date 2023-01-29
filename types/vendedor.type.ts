import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TVendedorPk = {
  CadVen_id?: number;
};
export type TVendedorCol = {
  NmVendedor?: string;
  Endereco?: string;
  Cidade?: string;
  Uf?: string;
  CPF?: number;
  Identidade?: string;
  Telefone?: string;
  FgControle?: string;
  Meta?: number;
  Venda?: number;
  ComissaoAV?: number;
  ComissaoPZ?: number;
  DtUltAlteracao?: string;
  Cargo?: string;
  PercLimiteComissao?: number;
  FgAtivo?: string;
  Bairro?: string;
  TelefoneAdicional?: string;
  Email?: string;
  PercComissaoVarejoVista?: number;
  PercComissaoAtacadoVista?: number;
  PercComissaoVarejoPrazo?: number;
  PercComissaoAtacadoPrazo?: number;
  Cep?: number;
  NmFantasia?: string;
  FgFuncionarioOS?: string;
  FgTecnicoOS?: string;
};
export type TVendedor = TVendedorPk | TVendedorCol;

export type TVendedorFields =
  | keyof Required<TVendedorPk>
  | keyof Required<TVendedorCol>;

export type TVendedorIds = {
  [pk in keyof Required<TVendedorPk>]: any;
};
export type TVendedorSelect = TSelect<TVendedorFields>;
export type TVendedorWhere = TWhere<TVendedorFields>;
export type TVendedorOrder = TOrder<TVendedorFields>;

export type TVendedorSchema = () => Promise<TFieldClient[]>;
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

export type TVendedorCreate = (args: { data: TVendedor }) => Promise<TVendedor>;
export type TVendedorUpdate = (args: {
  id: TVendedorIds;
  data: TVendedor;
}) => Promise<TVendedor>;
export type TVendedorDel = (args: { id: TVendedorIds }) => Promise<number>;

export type TVendedorRpc = {
  query: {
    vendedorSchema: TVendedorSchema;
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
