export type TNfEntradaItemId = {
  filial_id: string;
  nota_id?: string;
  serie_id: string;
  modelo_id?: string;
};

export type TNfEntradaItemBase = {
  fornecedor_id: string;
  is_custo: string;
  percentual_icms: string;
  quantidade: string;
  valor_acrescimo: string;
  valor_icms: string;
  valor_total: string;
  valor_base_substituicao: string;
  data_entrada: string;
  valor_repasse_icms: string;
  preco_pmc: string;
  is_compoe_base_substituicao: string;
  cfop_fiscal_item: string;
  valor_bruto_unnitario: string;
  base_calculo_credito_pis_cofins: string;
  contribuicao_apurada_pis_cofins: string;
  valor_base_calculo_ipi: string;
  produto_id?: string;
  is_etiqueta?: string;
  percentual_ipi?: string;
  movimentacao?: string;
  valor_desconto?: string;
  valor_ipi?: string;
  tipo_tributacao?: string;
  valor_icms_substituicao?: string;
  is_estoque?: string;
  is_icms_recolhido?: string;
  valor_relacionado?: string;
  cfop?: string;
  valor_base_calculo_icms?: string;
  valor_liquido_unnitario?: string;
  tipo_credito_pis_cofins?: string;
  sequencia?: string;
  is_conferido?: string;
};

export type TNfEntradaItem = Partial<TNfEntradaItemId | TNfEntradaItemBase>;
