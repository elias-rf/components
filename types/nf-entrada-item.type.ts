import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TNfEntradaItemPk = {
  filial_id?: string;
  nota_id?: string;
  serie_id?: string;
  modelo_id?: string;
};
export type TNfEntradaItemCol = {
  fornecedor_id?: string;
  produto_id?: string;
  is_custo?: string;
  is_etiqueta?: string;
  percentual_icms?: string;
  percentual_ipi?: string;
  quantidade?: string;
  movimentacao?: string;
  valor_acrescimo?: string;
  valor_desconto?: string;
  valor_icms?: string;
  valor_ipi?: string;
  valor_total?: string;
  tipo_tributacao?: string;
  valor_base_substituicao?: string;
  valor_icms_substituicao?: string;
  data_entrada?: string;
  is_estoque?: string;
  valor_repasse_icms?: string;
  is_icms_recolhido?: string;
  preco_pmc?: string;
  valor_relacionado?: string;
  is_compoe_base_substituicao?: string;
  cfop?: string;
  cfop_fiscal_item?: string;
  valor_base_calculo_icms?: string;
  valor_bruto_unitario?: string;
  valor_liquido_unitario?: string;
  base_calculo_credito_pis_cofins?: string;
  tipo_credito_pis_cofins?: string;
  contribuicao_apurada_pis_cofins?: string;
  sequencia?: string;
  valor_base_calculo_ipi?: string;
  is_conferido?: string;
};
export type TNfEntradaItem = TNfEntradaItemPk | TNfEntradaItemCol;

export type TNfEntradaItemFields =
  | keyof Required<TNfEntradaItemPk>
  | keyof Required<TNfEntradaItemCol>;

export type TNfEntradaItemIds = {
  [pk in keyof Required<TNfEntradaItemPk>]: any;
};
export type TNfEntradaItemSelect = TSelect<TNfEntradaItemFields>;
export type TNfEntradaItemWhere = TWhere<TNfEntradaItemFields>;
export type TNfEntradaItemOrder = TOrder<TNfEntradaItemFields>;

export type TNfEntradaItemSchema = () => Promise<TFieldClient[]>;
export type TNfEntradaItemClear = () => Promise<TNfEntradaItem>;
export type TNfEntradaItemList = (args: {
  where?: TWhere<TNfEntradaItemFields>[];
  order?: TOrder<TNfEntradaItemFields>[];
  limit?: number;
  select?: TSelect<TNfEntradaItemFields>;
}) => Promise<TNfEntradaItem[]>;
export type TNfEntradaItemRead = (args: {
  id: TNfEntradaItemIds;
  select?: TSelect<TNfEntradaItemFields>;
}) => Promise<TNfEntradaItem>;

export type TNfEntradaItemCreate = (args: {
  data: TNfEntradaItem;
}) => Promise<TNfEntradaItem>;
export type TNfEntradaItemUpdate = (args: {
  id: TNfEntradaItemIds;
  data: TNfEntradaItem;
}) => Promise<TNfEntradaItem>;
export type TNfEntradaItemDel = (args: {
  id: TNfEntradaItemIds;
}) => Promise<number>;

export type TNfEntradaItemRpc = {
  query: {
    schema: TNfEntradaItemSchema;
    clear: TNfEntradaItemClear;
    list: TNfEntradaItemList;
    read: TNfEntradaItemRead;
  };
  mutation: {
    create: TNfEntradaItemCreate;
    update: TNfEntradaItemUpdate;
    del: TNfEntradaItemDel;
  };
};
