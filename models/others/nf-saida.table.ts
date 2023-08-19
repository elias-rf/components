import { TTableDef } from "@/types";

export const nf_saida: TTableDef = {
  database: "plano",
  table: "MestreNota",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      primaryKey: true,
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "nota_id",
      primaryKey: true,
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie_id",
      primaryKey: true,
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      primaryKey: true,
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "data_emissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "tipo",
      typeField: "string",
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "cliente_id",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "vendedor_id",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgEstatistica",
      label: "FgEstatistica",
      name: "eh_estatistica",
      typeField: "string",
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "eh_estoque",
      typeField: "string",
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "valor_total",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculo",
      label: "VlBaseCalculo",
      name: "valor_base_calculo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseSubstituicao",
      label: "BaseSubstituicao",
      name: "BaseSubstituicao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "IcmsSubstituicao",
      label: "IcmsSubstituicao",
      name: "IcmsSubstituicao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIcms",
      label: "VlIcms",
      name: "valor_icms",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIRRF",
      label: "VlIRRF",
      name: "VlIRRF",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlISS",
      label: "VlISS",
      name: "VlISS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlProdutos",
      label: "VlProdutos",
      name: "valor_produto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlFrete",
      label: "VlFrete",
      name: "valor_frete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlSeguro",
      label: "VlSeguro",
      name: "valor_seguro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAcessorias",
      label: "VlAcessorias",
      name: "VlAcessorias",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Servico",
      label: "Servico",
      name: "Servico",
      typeField: "string",
    },
    {
      field: "VlServico",
      label: "VlServico",
      name: "VlServico",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "pedido_id",
      typeField: "int",
    },
    {
      field: "OrdemCompra",
      label: "OrdemCompra",
      name: "compra_id",
      typeField: "string",
    },
    {
      field: "NumNotaOrigem",
      label: "NumNotaOrigem",
      name: "NumNotaOrigem",
      typeField: "int",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "horario",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgRatearDescontoAcrescimo",
      label: "FgRatearDescontoAcrescimo",
      name: "FgRatearDescontoAcrescimo",
      typeField: "string",
    },
    {
      field: "FgDesconto",
      label: "FgDesconto",
      name: "eh_desconto",
      typeField: "string",
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "valor_desconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumCupomFiscalOrigem",
      label: "NumCupomFiscalOrigem",
      name: "NumCupomFiscalOrigem",
      typeField: "int",
    },
    {
      field: "NumPDVOrigem",
      label: "NumPDVOrigem",
      name: "NumPDVOrigem",
      typeField: "int",
    },
    {
      field: "CdFilialAssociada",
      label: "CdFilialAssociada",
      name: "CdFilialAssociada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdVendedorExtra",
      label: "CdVendedorExtra",
      name: "CdVendedorExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NotadeComplemento",
      label: "NotadeComplemento",
      name: "nota_complemento",
      typeField: "string",
    },
    {
      field: "VlTroco",
      label: "VlTroco",
      name: "valor_troco",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoIRRF",
      label: "VlBaseCalculoIRRF",
      name: "VlBaseCalculoIRRF",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercAliqIRRF",
      label: "PercAliqIRRF",
      name: "PercAliqIRRF",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoIN381",
      label: "VlBaseCalculoIN381",
      name: "VlBaseCalculoIN381",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercAliqIN381",
      label: "PercAliqIN381",
      name: "PercAliqIN381",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIN381",
      label: "VlIN381",
      name: "VlIN381",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercParticipPrazo",
      label: "PercParticipPrazo",
      name: "PercParticipPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercParticipVista",
      label: "PercParticipVista",
      name: "PercParticipVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "RedutorComissao",
      label: "RedutorComissao",
      name: "RedutorComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "GrupoFiscal",
      label: "GrupoFiscal",
      name: "GrupoFiscal",
      typeField: "int",
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "tipo_venda_id",
      typeField: "int",
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "funcionario_id",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "usuario_id",
      typeField: "string",
    },
    {
      field: "Nop",
      label: "Nop",
      name: "cfop",
      typeField: "int",
    },
    {
      field: "NopFiscal",
      label: "NopFiscal",
      name: "cfop_fiscal",
      typeField: "int",
    },
    {
      field: "VlImpostoDiferido",
      label: "VlImpostoDiferido",
      name: "VlImpostoDiferido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      typeField: "float",

      scale: 4,
    },

    {
      field: "VlIPIFrete",
      label: "VlIPIFrete",
      name: "VlIPIFrete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoII",
      label: "VlBaseCalculoII",
      name: "VlBaseCalculoII",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlII",
      label: "VlII",
      name: "VlII",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtSaida",
      label: "DtSaida",
      name: "DtSaida",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlBaseCalculoIPI",
      label: "VlBaseCalculoIPI",
      name: "VlBaseCalculoIPI",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPISSubstituido",
      label: "VlPISSubstituido",
      name: "VlPISSubstituido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCofinsSubstituido",
      label: "VlCofinsSubstituido",
      name: "VlCofinsSubstituido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoNota",
      label: "VlAproximadoImpostoNota",
      name: "VlAproximadoImpostoNota",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdSituacaoDocumento",
      label: "CdSituacaoDocumento",
      name: "CdSituacaoDocumento",
      typeField: "string",
    },
    {
      field: "SerieNotaOrigem",
      label: "SerieNotaOrigem",
      name: "SerieNotaOrigem",
      typeField: "string",
    },
    {
      field: "ModeloNotaOrigem",
      label: "ModeloNotaOrigem",
      name: "ModeloNotaOrigem",
      typeField: "string",
    },
    {
      field: "VlDeducaoFiscal",
      label: "VlDeducaoFiscal",
      name: "VlDeducaoFiscal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescricaoNop",
      label: "DescricaoNop",
      name: "DescricaoNop",
      typeField: "string",
    },
    {
      field: "TipoNota",
      label: "TipoNota",
      name: "tipoNota",
      typeField: "string",
    },
    {
      field: "IndicadorFormaPgto",
      label: "IndicadorFormaPgto",
      name: "IndicadorFormaPgto",
      typeField: "int",
    },
    {
      field: "FinalidadeNf",
      label: "FinalidadeNf",
      name: "FinalidadeNf",
      typeField: "string",
    },
    {
      field: "FgVendaConsumidor",
      label: "FgVendaConsumidor",
      name: "eh_venda_consumidor",
      typeField: "string",
    },
    {
      field: "FgDiferencialAliquota",
      label: "FgDiferencialAliquota",
      name: "eh_diferencial_aliquota",
      typeField: "string",
    },
    {
      field: "SituacaoNfe",
      label: "SituacaoNfe",
      name: "SituacaoNfe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AmbienteNfe",
      label: "AmbienteNfe",
      name: "AmbienteNfe",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumOrdemFaturamento",
      label: "NumOrdemFaturamento",
      name: "NumOrdemFaturamento",
      typeField: "int",
    },
    {
      field: "FgImportacao",
      label: "FgImportacao",
      name: "eh_importacao",
      typeField: "string",
    },
    {
      field: "IndicadorPresenca",
      label: "IndicadorPresenca",
      name: "IndicadorPresenca",
      typeField: "string",
    },
    {
      field: "FgNfTerceiros",
      label: "FgNfTerceiros",
      name: "eh_nf_terceiro",
      typeField: "string",
    },
    {
      field: "VlAproximadoImpostoFederal",
      label: "VlAproximadoImpostoFederal",
      name: "VlAproximadoImpostoFederal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoEstadual",
      label: "VlAproximadoImpostoEstadual",
      name: "VlAproximadoImpostoEstadual",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoMunicipal",
      label: "VlAproximadoImpostoMunicipal",
      name: "VlAproximadoImpostoMunicipal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlFCP",
      label: "VlFCP",
      name: "VlFCP",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlFCPST",
      label: "VlFCPST",
      name: "VlFCPST",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NomeAdquirente",
      label: "NomeAdquirente",
      name: "NomeAdquirente",
      typeField: "string",
    },
    {
      field: "CPFCNPJAdquirente",
      label: "CPFCNPJAdquirente",
      name: "CPFCNPJAdquirente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "percComissao",
      label: "percComissao",
      name: "percComissao",
      typeField: "float",
    },
  ],
};
