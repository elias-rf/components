import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TNfSaidaFvPk = {
  filial_id?: number;
  nota_id?: number;
  serie?: number;
  modelo?: string;
};
export type TNfSaidaFvCol = {
  data_emissao?: string;
  data_saida?: string;
  tipo?: string;
  cliente_id?: number;
  vendedor_id?: number;
  altera_vendas?: boolean;
  altera_estoque?: boolean;
  valor_total?: number;
  valor_produto?: number;
  valor_frete?: number;
  pedido_id?: number;
  cfop?: number;
};
export type TNfSaidaFv = TNfSaidaFvPk | TNfSaidaFvCol;

export type TNfSaidaFvFields =
  | keyof Required<TNfSaidaFvPk>
  | keyof Required<TNfSaidaFvCol>;

export type TNfSaidaFvIds = {
  [pk in keyof Required<TNfSaidaFvPk>]: any;
};
export type TNfSaidaFvSelect = TSelect<TNfSaidaFvFields>;
export type TNfSaidaFvWhere = TWhere<TNfSaidaFvFields>;
export type TNfSaidaFvOrder = TOrder<TNfSaidaFvFields>;

export type TNfSaidaFvSchema = () => Promise<TFieldClient[]>;
export type TNfSaidaFvClear = () => Promise<TNfSaidaFv>;
export type TNfSaidaFvList = (args: {
  where?: TWhere<TNfSaidaFvFields>[];
  order?: TOrder<TNfSaidaFvFields>[];
  limit?: number;
  select?: TSelect<TNfSaidaFvFields>;
}) => Promise<TNfSaidaFv[]>;
export type TNfSaidaFvRead = (args: {
  id: TNfSaidaFvIds;
  select?: TSelect<TNfSaidaFvFields>;
}) => Promise<TNfSaidaFv>;

export type TNfSaidaFvCreate = (args: {
  data: TNfSaidaFv;
}) => Promise<TNfSaidaFv>;
export type TNfSaidaFvUpdate = (args: {
  id: TNfSaidaFvIds;
  data: TNfSaidaFv;
}) => Promise<TNfSaidaFv>;
export type TNfSaidaFvDel = (args: { id: TNfSaidaFvIds }) => Promise<number>;

export type TNfSaidaFvRpc = {
  query: {
    schema: TNfSaidaFvSchema;
    clear: TNfSaidaFvClear;
    list: TNfSaidaFvList;
    read: TNfSaidaFvRead;
    vendaDiario(args: { inicio: string; fim: string; uf: string[] }): Promise<
      {
        NmCategoria: string;
        DtEmissao: string;
        quantidade: number;
        valor: number;
      }[]
    >;
    vendaDiarioSchema(): Promise<TFieldClient[]>;
    vendaMensalCliente({
      inicio,
      fim,
      cliente,
    }: {
      inicio: string;
      fim: string;
      cliente: number;
    }): Promise<
      {
        NmCategoria: string;
        CdCliente: number;
        anoMes: string;
        quantidade: number;
        valor: number;
      }[]
    >;
    vendaMensalClienteSchema(): Promise<TFieldClient[]>;
    vendaAnalitico(args: {
      inicio: string;
      fim: string;
    }): Promise<TNfSaidaFv[]>;
    vendaAnaliticoSchema(): Promise<TFieldClient[]>;
  };
  mutation: {
    create: TNfSaidaFvCreate;
    update: TNfSaidaFvUpdate;
    del: TNfSaidaFvDel;
  };
};
