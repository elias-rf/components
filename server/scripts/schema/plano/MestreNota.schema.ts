import { TEntity } from "@er/types/*";

export const MestreNota: TEntity =
  {
  "database": "plano",
  "table": "MestreNota",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgEstatistica",
      "label": "FgEstatistica",
      "name": "FgEstatistica",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculo",
      "label": "VlBaseCalculo",
      "name": "VlBaseCalculo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseSubstituicao",
      "label": "BaseSubstituicao",
      "name": "BaseSubstituicao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "IcmsSubstituicao",
      "label": "IcmsSubstituicao",
      "name": "IcmsSubstituicao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIcms",
      "label": "VlIcms",
      "name": "VlIcms",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIRRF",
      "label": "VlIRRF",
      "name": "VlIRRF",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlISS",
      "label": "VlISS",
      "name": "VlISS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlProdutos",
      "label": "VlProdutos",
      "name": "VlProdutos",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlFrete",
      "label": "VlFrete",
      "name": "VlFrete",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlSeguro",
      "label": "VlSeguro",
      "name": "VlSeguro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAcessorias",
      "label": "VlAcessorias",
      "name": "VlAcessorias",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIPI",
      "label": "VlIPI",
      "name": "VlIPI",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Servico",
      "label": "Servico",
      "name": "Servico",
      "type": "string",
      "size": 1024
    },
    {
      "field": "VlServico",
      "label": "VlServico",
      "name": "VlServico",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4
    },
    {
      "field": "OrdemCompra",
      "label": "OrdemCompra",
      "name": "OrdemCompra",
      "type": "string",
      "size": 20
    },
    {
      "field": "NumNotaOrigem",
      "label": "NumNotaOrigem",
      "name": "NumNotaOrigem",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgRatearDescontoAcrescimo",
      "label": "FgRatearDescontoAcrescimo",
      "name": "FgRatearDescontoAcrescimo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDesconto",
      "label": "FgDesconto",
      "name": "FgDesconto",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumCupomFiscalOrigem",
      "label": "NumCupomFiscalOrigem",
      "name": "NumCupomFiscalOrigem",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumPDVOrigem",
      "label": "NumPDVOrigem",
      "name": "NumPDVOrigem",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdFilialAssociada",
      "label": "CdFilialAssociada",
      "name": "CdFilialAssociada",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdVendedorExtra",
      "label": "CdVendedorExtra",
      "name": "CdVendedorExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NotadeComplemento",
      "label": "NotadeComplemento",
      "name": "NotadeComplemento",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlTroco",
      "label": "VlTroco",
      "name": "VlTroco",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoIRRF",
      "label": "VlBaseCalculoIRRF",
      "name": "VlBaseCalculoIRRF",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercAliqIRRF",
      "label": "PercAliqIRRF",
      "name": "PercAliqIRRF",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoIN381",
      "label": "VlBaseCalculoIN381",
      "name": "VlBaseCalculoIN381",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercAliqIN381",
      "label": "PercAliqIN381",
      "name": "PercAliqIN381",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlIN381",
      "label": "VlIN381",
      "name": "VlIN381",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercParticipPrazo",
      "label": "PercParticipPrazo",
      "name": "PercParticipPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercParticipVista",
      "label": "PercParticipVista",
      "name": "PercParticipVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "RedutorComissao",
      "label": "RedutorComissao",
      "name": "RedutorComissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "GrupoFiscal",
      "label": "GrupoFiscal",
      "name": "GrupoFiscal",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdTipoVenda",
      "label": "CdTipoVenda",
      "name": "CdTipoVenda",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdUsuario",
      "label": "CdUsuario",
      "name": "CdUsuario",
      "type": "string",
      "size": 10
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 4
    },
    {
      "field": "NopFiscal",
      "label": "NopFiscal",
      "name": "NopFiscal",
      "type": "int",
      "size": 4
    },
    {
      "field": "VlImpostoDiferido",
      "label": "VlImpostoDiferido",
      "name": "VlImpostoDiferido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdLocalEstoque",
      "label": "CdLocalEstoque",
      "name": "CdLocalEstoque",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "VlIPIFrete",
      "label": "VlIPIFrete",
      "name": "VlIPIFrete",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoII",
      "label": "VlBaseCalculoII",
      "name": "VlBaseCalculoII",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlII",
      "label": "VlII",
      "name": "VlII",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtSaida",
      "label": "DtSaida",
      "name": "DtSaida",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlBaseCalculoIPI",
      "label": "VlBaseCalculoIPI",
      "name": "VlBaseCalculoIPI",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPISSubstituido",
      "label": "VlPISSubstituido",
      "name": "VlPISSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCofinsSubstituido",
      "label": "VlCofinsSubstituido",
      "name": "VlCofinsSubstituido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoPIS",
      "label": "VlBaseCalculoPIS",
      "name": "VlBaseCalculoPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPIS",
      "label": "VlPIS",
      "name": "VlPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoCOFINS",
      "label": "VlBaseCalculoCOFINS",
      "name": "VlBaseCalculoCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCofins",
      "label": "VlCofins",
      "name": "VlCofins",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoNota",
      "label": "VlAproximadoImpostoNota",
      "name": "VlAproximadoImpostoNota",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdSituacaoDocumento",
      "label": "CdSituacaoDocumento",
      "name": "CdSituacaoDocumento",
      "type": "string",
      "size": 2
    },
    {
      "field": "SerieNotaOrigem",
      "label": "SerieNotaOrigem",
      "name": "SerieNotaOrigem",
      "type": "string",
      "size": 3
    },
    {
      "field": "ModeloNotaOrigem",
      "label": "ModeloNotaOrigem",
      "name": "ModeloNotaOrigem",
      "type": "string",
      "size": 3
    },
    {
      "field": "VlDeducaoFiscal",
      "label": "VlDeducaoFiscal",
      "name": "VlDeducaoFiscal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescricaoNop",
      "label": "DescricaoNop",
      "name": "DescricaoNop",
      "type": "string",
      "size": 32
    },
    {
      "field": "TipoNota",
      "label": "TipoNota",
      "name": "TipoNota",
      "type": "string",
      "size": 1
    },
    {
      "field": "IndicadorFormaPgto",
      "label": "IndicadorFormaPgto",
      "name": "IndicadorFormaPgto",
      "type": "int",
      "size": 2
    },
    {
      "field": "FinalidadeNf",
      "label": "FinalidadeNf",
      "name": "FinalidadeNf",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVendaConsumidor",
      "label": "FgVendaConsumidor",
      "name": "FgVendaConsumidor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDiferencialAliquota",
      "label": "FgDiferencialAliquota",
      "name": "FgDiferencialAliquota",
      "type": "string",
      "size": 1
    },
    {
      "field": "SituacaoNfe",
      "label": "SituacaoNfe",
      "name": "SituacaoNfe",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "AmbienteNfe",
      "label": "AmbienteNfe",
      "name": "AmbienteNfe",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumOrdemFaturamento",
      "label": "NumOrdemFaturamento",
      "name": "NumOrdemFaturamento",
      "type": "int",
      "size": 5
    },
    {
      "field": "FgImportacao",
      "label": "FgImportacao",
      "name": "FgImportacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "IndicadorPresenca",
      "label": "IndicadorPresenca",
      "name": "IndicadorPresenca",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgNfTerceiros",
      "label": "FgNfTerceiros",
      "name": "FgNfTerceiros",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlAproximadoImpostoFederal",
      "label": "VlAproximadoImpostoFederal",
      "name": "VlAproximadoImpostoFederal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoEstadual",
      "label": "VlAproximadoImpostoEstadual",
      "name": "VlAproximadoImpostoEstadual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoMunicipal",
      "label": "VlAproximadoImpostoMunicipal",
      "name": "VlAproximadoImpostoMunicipal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlFCP",
      "label": "VlFCP",
      "name": "VlFCP",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlFCPST",
      "label": "VlFCPST",
      "name": "VlFCPST",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NomeAdquirente",
      "label": "NomeAdquirente",
      "name": "NomeAdquirente",
      "type": "string",
      "size": 256
    },
    {
      "field": "CPFCNPJAdquirente",
      "label": "CPFCNPJAdquirente",
      "name": "CPFCNPJAdquirente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "percComissao",
      "label": "percComissao",
      "name": "percComissao",
      "type": "float",
      "size": 8
    }
  ]
}
