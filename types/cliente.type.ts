import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TClientePk = {
  cliente_id?: number;
};
export type TClienteCol = {
  nome?: string;
  cidade?: string;
  uf?: string;
  cnpj?: string;
  vendedor_id?: string;
  is_ativo?: string;
};
export type TCliente = TClientePk | TClienteCol;

export type TClienteFields =
  | keyof Required<TClientePk>
  | keyof Required<TClienteCol>;

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

export type TClienteCreate = (args: { data: TCliente }) => Promise<TCliente>;
export type TClienteUpdate = (args: {
  id: TClienteIds;
  data: TCliente;
}) => Promise<TCliente>;
export type TClienteDel = (args: { id: TClienteIds }) => Promise<number>;

export type TClienteRpc = {
  query: {
    schema: TClienteSchema;
    clear: TClienteClear;
    list: TClienteList;
    read: TClienteRead;
    vendaMensalQuantidadeSchema(args: {
      inicio: string;
      fim: string;
    }): Promise<TFieldClient[]>;
    vendaMensalValorSchema(args: {
      inicio: string;
      fim: string;
    }): Promise<TFieldClient[]>;
    vendaMensalValorMedioSchema(args: {
      inicio: string;
      fim: string;
    }): Promise<TFieldClient[]>;
    vendaMensalQuantidade(args: {
      inicio: string;
      fim: string;
      cliente: number;
    }): Promise<any>;
    vendaMensalValor(args: {
      inicio: string;
      fim: string;
      cliente: number;
    }): Promise<any>;
    vendaMensalValorMedio(args: {
      inicio: string;
      fim: string;
      cliente: number;
    }): Promise<any>;
  };
  // mutation: {
  //   clienteCreate: TClienteCreate;
  //   update: TClienteUpdate;
  //   del: TClienteDel;
  // };
};
