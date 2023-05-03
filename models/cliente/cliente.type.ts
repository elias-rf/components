import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@/types";
import { TConnection } from "../../config/connections";

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

export type TClienteSchema = () => Promise<TFieldDef[]>;
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

export type TClienteModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TClienteList;
    read: TClienteRead;
    vendaMensalQuantidadeSchema(args: TPeriodo): Promise<TFieldDef[]>;
    vendaMensalQuantidade(args: TPeriodoCliente): Promise<TVendaMensalResp[]>;

    vendaMensalValorSchema(args: TPeriodo): Promise<TFieldDef[]>;
    vendaMensalValor(args: TPeriodoCliente): Promise<TVendaMensalResp[]>;

    vendaMensalValorMedioSchema(args: TPeriodo): Promise<TFieldDef[]>;
    vendaMensalValorMedio(args: TPeriodoCliente): Promise<TVendaMensalResp[]>;
  };
  mutation: {
    create: TClienteCreate;
    update: TClienteUpdate;
    del: TClienteDel;
  };
};

export type TClienteRpc = TClienteModel;
