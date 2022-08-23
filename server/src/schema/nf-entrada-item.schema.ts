import { TEntity } from "@er/types/*";

export const agenda_telefone: TEntity = {
  database: "oftalmo",
  table: "phonebook",
  fields: [
    {
      field: "CdEmpresa",
      label: "Filial",
      name: "filial_id",
      primaryKey: true,
      type: "string",
    },
    {
      field: "NroNF",
      label: "Nota",
      name: "nota_id",
      type: "string",
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie_id",
      primaryKey: true,
      type: "string",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      type: "string",
    },
    {
      field: "CdFornecedor",
      label: "Cód Fornecedor",
      name: "fornecedor_id",
      primaryKey: true,
      type: "string",
    },
    {
      field: "CdProduto",
      label: "Cód Produto",
      name: "produto_id",
      type: "string",
    },
    {
      field: "FgCusto",
      label: "Custo",
      name: "is_custo",
      primaryKey: true,
      type: "string",
    },
    {
      field: "FgEtiqueta",
      label: "Etiqueta",
      name: "is_etiqueta",
      type: "string",
    },
    {
      field: "PercIcms",
      label: "ICMS %",
      name: "percentual_icms",
      primaryKey: true,
      type: "string",
    },
    {
      field: "PercIpi",
      label: "IPI %",
      name: "percentual_ipi",
      type: "string",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      primaryKey: true,
      type: "string",
    },
    {
      field: "TipoMovimentacao",
      label: "Movimentação",
      name: "movimentacao",
      type: "string",
    },
    {
      field: "VlAcrescItem",
      label: "Vlr Acréscimo",
      name: "valor_acrescimo",
      primaryKey: true,
      type: "string",
    },
    {
      field: "VlDescItem",
      label: "Vlr Desconto",
      name: "valor_desconto",
      type: "string",
    },
    {
      field: "VlrIcms",
      label: "Vlr ICMS",
      name: "valor_icms",
      primaryKey: true,
      type: "string",
    },
    {
      field: "VlrIpi",
      label: "Vlr IPI",
      name: "valor_ipi",
      type: "string",
    },
    {
      field: "VlTotItem",
      label: "Total Total",
      name: "valor_total",
      primaryKey: true,
      type: "string",
    },
    {
      field: "TipoTributacao",
      label: "Tributação",
      name: "tipo_tributacao",
      type: "string",
    },
    {
      field: "VlBaseSub",
      label: "Vlr Base Substituição",
      name: "valor_base_substituicao",
      primaryKey: true,
      type: "string",
    },
    {
      field: "VlIcmsSub",
      label: "Vlr ICMS Substituição",
      name: "valor_icms_substituicao",
      type: "string",
    },
    {
      field: "DtEntr",
      label: "Data Entrada",
      name: "data_entrada",
      primaryKey: true,
      type: "string",
    },
    {
      field: "FgEstoque",
      label: "Estoque",
      name: "is_estoque",
      type: "string",
    },
    {
      field: "VlRepasseICMSItem",
      label: "Vlr Repasse ICMS",
      name: "valor_repasse_icms",
      primaryKey: true,
      type: "string",
    },
    {
      field: "FgICMSJaRecolhido",
      label: "ICMS Recolhido",
      name: "is_icms_recolhido",
      type: "string",
    },
    {
      field: "PrecPMC",
      label: "Grupo",
      name: "preco_pmc",
      primaryKey: true,
      type: "string",
    },
    {
      field: "VlRelacionado",
      label: "Recurso",
      name: "valor_relacionado",
      type: "string",
    },
    {
      field: "FgCompoeBaseSub",
      label: "Compoe base substituicao",
      name: "is_compoe_base_substituicao",
      primaryKey: true,
      type: "string",
    },
    {
      field: "Nop",
      label: "CFOP",
      name: "cfop",
      type: "string",
    },
    {
      field: "NopFiscalItem",
      label: "Grupo",
      name: "cfop_fiscal_item",
      primaryKey: true,
      type: "string",
    },
    {
      field: "VlBaseCalculoICMS",
      label: "Recurso",
      name: "valor_base_calculo_icms",
      type: "string",
    },
    {
      field: "VlBrutoUnitario",
      label: "Grupo",
      name: "valor_bruto_unnitario",
      primaryKey: true,
      type: "string",
    },
    {
      field: "VlLiquidoUnitario",
      label: "Recurso",
      name: "valor_liquido_unnitario",
      type: "string",
    },
    {
      field: "CdBaseCalculoCreditoPISCOFINS",
      label: "Grupo",
      name: "base_calculo_credito_pis_cofins",
      primaryKey: true,
      type: "string",
    },
    {
      field: "CdTipoCreditoPISCOFINS",
      label: "Recurso",
      name: "tipo_credito_pis_cofins",
      type: "string",
    },
    {
      field: "CdContribuicaoApuradaPISCOFINS",
      label: "Grupo",
      name: "contribuicao_apurada_pis_cofins",
      primaryKey: true,
      type: "string",
    },
    {
      field: "Sequencia",
      label: "Sequência",
      name: "sequencia",
      type: "string",
    },
    {
      field: "VlBaseCalculoIPI",
      label: "Base Calculo IPI",
      name: "valor_base_calculo_ipi",
      primaryKey: true,
      type: "string",
    },
    {
      field: "FgConferido",
      label: "Conferido",
      name: "is_conferido",
      type: "string",
    },
  ],
};
