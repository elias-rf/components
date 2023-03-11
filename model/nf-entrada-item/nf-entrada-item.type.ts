import { TFieldClient, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TNfEntradaItemPk {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
  modelo_id?: string;
}
export interface TNfEntradaItem extends TNfEntradaItemPk {
  fornecedor_id?: number;
  produto_plano_id?: string;
  is_custo?: string;
  is_etiqueta?: string;
  percentual_icms?: number;
  percentual_ipi?: number;
  quantidade?: number;
  movimentacao?: string;
  valor_acrescimo?: number;
  valor_desconto?: number;
  valor_icms?: number;
  valor_ipi?: number;
  valor_total?: number;
  tipo_tributacao?: string;
  valor_base_substituicao?: number;
  valor_icms_substituicao?: number;
  data_entrada?: string;
  is_estoque?: string;
  valor_repasse_icms?: number;
  is_icms_recolhido?: string;
  preco_pmc?: number;
  valor_relacionado?: number;
  is_compoe_base_substituicao?: string;
  cfop?: number;
  cfop_fiscal_item?: number;
  valor_base_calculo_icms?: number;
  valor_bruto_unitario?: number;
  valor_liquido_unitario?: number;
  base_calculo_credito_pis_cofins?: number;
  tipo_credito_pis_cofins?: number;
  contribuicao_apurada_pis_cofins?: number;
  sequencia?: number;
  valor_base_calculo_ipi?: number;
  is_conferido?: string;
}

export type TNfEntradaItemFields = keyof Required<TNfEntradaItem>

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
  select?: TSelect<TNfEntradaItemFields>;
}) => Promise<TNfEntradaItem>;
export type TNfEntradaItemUpdate = (args: {
  id: TNfEntradaItemIds;
  data: TNfEntradaItem;
  select?: TSelect<TNfEntradaItemFields>;
}) => Promise<TNfEntradaItem>;
export type TNfEntradaItemDel = (args: {
  id: TNfEntradaItemIds;
}) => Promise<number>;

//#region def
//#endregion

export type TNfEntradaItemCrud = {
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

export type TNfEntradaItemModel = TNfEntradaItemCrud & {
  //#region query
    //#endregion
  //#region mutation
    //#endregion
  //#region type
//#endregion
};

export type TNfEntradaItemRpc = TNfEntradaItemModel;
