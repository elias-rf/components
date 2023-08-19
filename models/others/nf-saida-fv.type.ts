import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TNfSaidaFvPk {
  filial_id?: number;
  nota_id?: number;
  serie?: number;
  modelo?: string;
}
export interface TNfSaidaFv extends TNfSaidaFvPk {
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
}

export type TNfSaidaFvFields = keyof Required<TNfSaidaFv>;

export type TNfSaidaFvIds = {
  [pk in keyof Required<TNfSaidaFvPk>]: any;
};
export type TNfSaidaFvSelect = TSelect;
export type TNfSaidaFvWhere = TWhere;
export type TNfSaidaFvOrder = TOrder;

export type TNfSaidaFvSchema = () => Promise<TFieldDef[]>;
export type TNfSaidaFvClear = () => Promise<TNfSaidaFv>;
export type TNfSaidaFvList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TNfSaidaFv[]>;
export type TNfSaidaFvRead = (args: {
  id: TNfSaidaFvIds;
  select?: TSelect;
}) => Promise<TNfSaidaFv>;

export type TNfSaidaFvCreate = (args: {
  data: TNfSaidaFv;
  select?: TSelect;
}) => Promise<TNfSaidaFv>;
export type TNfSaidaFvUpdate = (args: {
  id: TNfSaidaFvIds;
  data: TNfSaidaFv;
  select?: TSelect;
}) => Promise<TNfSaidaFv>;
export type TNfSaidaFvDel = (args: { id: TNfSaidaFvIds }) => Promise<number>;

//#region def
//#endregion

export type TNfSaidaFvCrud = {
  query: {
    schema: TNfSaidaFvSchema;
    clear: TNfSaidaFvClear;
    list: TNfSaidaFvList;
    read: TNfSaidaFvRead;
  };
  mutation: {
    create: TNfSaidaFvCreate;
    update: TNfSaidaFvUpdate;
    del: TNfSaidaFvDel;
  };
};

export type TNfSaidaFvModel = TNfSaidaFvCrud & {
  //#region query

  //#endregion
  //#region mutation
  //#endregion
  //#region type
  query: {
    vendaDiario(args: { inicio: string; fim: string; uf: string[] }): Promise<
      {
        NmCategoria: string;
        DtEmissao: string;
        quantidade: number;
        valor: number;
      }[]
    >;
    vendaDiarioSchema(): Promise<TFieldDef[]>;
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
    vendaMensalClienteSchema(): Promise<TFieldDef[]>;
    vendaAnalitico(args: {
      inicio: string;
      fim: string;
    }): Promise<TNfSaidaFv[]>;
    vendaAnaliticoSchema(): Promise<TFieldDef[]>;
  };
  //#endregion
};

export type TNfSaidaFvRpc = TNfSaidaFvModel;
