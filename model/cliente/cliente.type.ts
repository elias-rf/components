import { TFieldClient, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TClientePk {
  cliente_id?: number;
}
export interface TCliente extends TClientePk {
  nome?: string;
  cidade?: string;
  uf?: string;
  cnpj?: string;
  vendedor_id?: string;
  is_ativo?: string;
  email?: string;
  identidade?: string;
  data_cadastro?: string;
}

export type TClienteFields = keyof Required<TCliente>;

export type TClienteIds = {
  [pk in keyof Required<TClientePk>]: any;
};
export type TClienteSelect = TSelect<TClienteFields>;
export type TClienteWhere = TWhere<TClienteFields>;
export type TClienteOrder = TOrder<TClienteFields>;

export type TClienteSchema = () => Promise<TFieldClient[]>;
export type TClienteClear = () => Promise<TCliente>;
export type TClienteList = (args: {
  where?: TWhere<TClienteFields>[];
  order?: TOrder<TClienteFields>[];
  limit?: number;
  select?: TSelect<TClienteFields>;
}) => Promise<TCliente[]>;
export type TClienteRead = (args: {
  id: TClienteIds;
  select?: TSelect<TClienteFields>;
}) => Promise<TCliente>;

export type TClienteCreate = (args: {
  data: TCliente;
  select?: TSelect<TClienteFields>;
}) => Promise<TCliente>;
export type TClienteUpdate = (args: {
  id: TClienteIds;
  data: TCliente;
  select?: TSelect<TClienteFields>;
}) => Promise<TCliente>;
export type TClienteDel = (args: { id: TClienteIds }) => Promise<number>;

//#region def
export type TPeriodo = {
  inicio: string;
  fim: string;
};
export type TPeriodoCliente = {
  inicio: string;
  fim: string;
  cliente: number;
};
export type TVendaMensalResp = {
  [key: string]: string | number;
};
//#endregion

export type TClienteCrud = {
  query: {
    schema: TClienteSchema;
    clear: TClienteClear;
    list: TClienteList;
    read: TClienteRead;
  };
  mutation: {
    create: TClienteCreate;
    update: TClienteUpdate;
    del: TClienteDel;
  };
};

export type TClienteModel = TClienteCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  query: {
    vendaMensalQuantidadeSchema(args: TPeriodo): Promise<TFieldClient[]>;
    vendaMensalQuantidade(args: TPeriodoCliente): Promise<TVendaMensalResp[]>;

    vendaMensalValorSchema(args: TPeriodo): Promise<TFieldClient[]>;
    vendaMensalValor(args: TPeriodoCliente): Promise<TVendaMensalResp[]>;

    vendaMensalValorMedioSchema(args: TPeriodo): Promise<TFieldClient[]>;
    vendaMensalValorMedio(args: TPeriodoCliente): Promise<TVendaMensalResp[]>;
  };
  //#endregion
};

export type TClienteRpc = TClienteModel;
