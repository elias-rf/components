import { TEntity } from "@er/types/*";

export const MestrePedido: TEntity =
  {
  "database": "plano",
  "table": "MestrePedido",
  "fields": [
    {
      "field": "CdEmitente",
      "label": "CdEmitente",
      "name": "CdEmitente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdTipoVenda",
      "label": "CdTipoVenda",
      "name": "CdTipoVenda",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdTransportadora",
      "label": "CdTransportadora",
      "name": "CdTransportadora",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "int",
      "size": 4
    },
    {
      "field": "ComboFilial",
      "label": "ComboFilial",
      "name": "ComboFilial",
      "type": "int",
      "size": 4
    },
    {
      "field": "CondFaturamento",
      "label": "CondFaturamento",
      "name": "CondFaturamento",
      "type": "string",
      "size": 3
    },
    {
      "field": "CondPgto",
      "label": "CondPgto",
      "name": "CondPgto",
      "type": "string",
      "size": 40
    },
    {
      "field": "DtColocacao",
      "label": "DtColocacao",
      "name": "DtColocacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
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
      "field": "DtEntrega",
      "label": "DtEntrega",
      "name": "DtEntrega",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomaIPI",
      "label": "FgSomaIPI",
      "name": "FgSomaIPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVendaFilial",
      "label": "FgVendaFilial",
      "name": "FgVendaFilial",
      "type": "string",
      "size": 1
    },
    {
      "field": "Garantia",
      "label": "Garantia",
      "name": "Garantia",
      "type": "string",
      "size": 20
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
      "field": "NmConfirmacao",
      "label": "NmConfirmacao",
      "name": "NmConfirmacao",
      "type": "string",
      "size": 30
    },
    {
      "field": "NmFavorecido",
      "label": "NmFavorecido",
      "name": "NmFavorecido",
      "type": "string",
      "size": 80
    },
    {
      "field": "Nop",
      "label": "Nop",
      "name": "Nop",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumPedidoEmitente",
      "label": "NumPedidoEmitente",
      "name": "NumPedidoEmitente",
      "type": "string",
      "size": 20
    },
    {
      "field": "NumRecibo",
      "label": "NumRecibo",
      "name": "NumRecibo",
      "type": "int",
      "size": 4
    },
    {
      "field": "Obs",
      "label": "Obs",
      "name": "Obs",
      "type": "string",
      "size": 1024
    },
    {
      "field": "Op_Transferencia",
      "label": "Op_Transferencia",
      "name": "Op_Transferencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercAcrescimo",
      "label": "PercAcrescimo",
      "name": "PercAcrescimo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoPrazo",
      "label": "PercComissaoPrazo",
      "name": "PercComissaoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoVista",
      "label": "PercComissaoVista",
      "name": "PercComissaoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDesconto",
      "label": "PercDesconto",
      "name": "PercDesconto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoFrete",
      "label": "TipoFrete",
      "name": "TipoFrete",
      "type": "string",
      "size": 1
    },
    {
      "field": "Validade",
      "label": "Validade",
      "name": "Validade",
      "type": "string",
      "size": 20
    },
    {
      "field": "VlAcrescimo",
      "label": "VlAcrescimo",
      "name": "VlAcrescimo",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "VlPago",
      "label": "VlPago",
      "name": "VlPago",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "CdSetor",
      "label": "CdSetor",
      "name": "CdSetor",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgPreVenda",
      "label": "FgPreVenda",
      "name": "FgPreVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "HrEntrega",
      "label": "HrEntrega",
      "name": "HrEntrega",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "ModeloPedido",
      "label": "ModeloPedido",
      "name": "ModeloPedido",
      "type": "string",
      "size": 15
    },
    {
      "field": "CdStatus",
      "label": "CdStatus",
      "name": "CdStatus",
      "type": "int",
      "size": 4
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
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdCondPagtoChe",
      "label": "CdCondPagtoChe",
      "name": "CdCondPagtoChe",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdTipoEntrega",
      "label": "CdTipoEntrega",
      "name": "CdTipoEntrega",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdCondPagto",
      "label": "CdCondPagto",
      "name": "CdCondPagto",
      "type": "int",
      "size": 2
    },
    {
      "field": "HrEntregaIni",
      "label": "HrEntregaIni",
      "name": "HrEntregaIni",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrEntregaFim",
      "label": "HrEntregaFim",
      "name": "HrEntregaFim",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlTaxaEntrega",
      "label": "VlTaxaEntrega",
      "name": "VlTaxaEntrega",
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
      "field": "PercComissaoVistaExtra",
      "label": "PercComissaoVistaExtra",
      "name": "PercComissaoVistaExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoPrazoExtra",
      "label": "PercComissaoPrazoExtra",
      "name": "PercComissaoPrazoExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdMatriculaVMS",
      "label": "CdMatriculaVMS",
      "name": "CdMatriculaVMS",
      "type": "string",
      "size": 20
    },
    {
      "field": "NSU",
      "label": "NSU",
      "name": "NSU",
      "type": "string",
      "size": 12
    },
    {
      "field": "VlCreditoVMS",
      "label": "VlCreditoVMS",
      "name": "VlCreditoVMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "OperadoraVMS",
      "label": "OperadoraVMS",
      "name": "OperadoraVMS",
      "type": "string",
      "size": 10
    },
    {
      "field": "FgEnvioCaneta",
      "label": "FgEnvioCaneta",
      "name": "FgEnvioCaneta",
      "type": "string",
      "size": 1
    },
    {
      "field": "NmPaciente",
      "label": "NmPaciente",
      "name": "NmPaciente",
      "type": "string",
      "size": 70
    },
    {
      "field": "CdProjeto",
      "label": "CdProjeto",
      "name": "CdProjeto",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdLocalEstoque",
      "label": "CdLocalEstoque",
      "name": "CdLocalEstoque",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgStatusOrdem",
      "label": "FgStatusOrdem",
      "name": "FgStatusOrdem",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConferencia",
      "label": "FgConferencia",
      "name": "FgConferencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "Contato",
      "label": "Contato",
      "name": "Contato",
      "type": "string",
      "size": 64
    },
    {
      "field": "Departamento",
      "label": "Departamento",
      "name": "Departamento",
      "type": "string",
      "size": 64
    },
    {
      "field": "AssisTecnica",
      "label": "AssisTecnica",
      "name": "AssisTecnica",
      "type": "string",
      "size": 64
    },
    {
      "field": "PrazoEntrega",
      "label": "PrazoEntrega",
      "name": "PrazoEntrega",
      "type": "string",
      "size": 128
    },
    {
      "field": "FgRateio",
      "label": "FgRateio",
      "name": "FgRateio",
      "type": "string",
      "size": 1
    },
    {
      "field": "CondPagamentoIni",
      "label": "CondPagamentoIni",
      "name": "CondPagamentoIni",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgEndComercial",
      "label": "FgEndComercial",
      "name": "FgEndComercial",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdClienteImpressao",
      "label": "CdClienteImpressao",
      "name": "CdClienteImpressao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumPedidoOriginal",
      "label": "NumPedidoOriginal",
      "name": "NumPedidoOriginal",
      "type": "float",
      "size": 9
    },
    {
      "field": "FgBuscaReceita",
      "label": "FgBuscaReceita",
      "name": "FgBuscaReceita",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVendaConsultorio",
      "label": "FgVendaConsultorio",
      "name": "FgVendaConsultorio",
      "type": "string",
      "size": 1
    },
    {
      "field": "DestinoMaterial",
      "label": "DestinoMaterial",
      "name": "DestinoMaterial",
      "type": "string",
      "size": 1
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
      "field": "FgObrigaNotaFiscal",
      "label": "FgObrigaNotaFiscal",
      "name": "FgObrigaNotaFiscal",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumECFCupomVinculado",
      "label": "NumECFCupomVinculado",
      "name": "NumECFCupomVinculado",
      "type": "int",
      "size": 5
    },
    {
      "field": "NumCOOCupomVinculado",
      "label": "NumCOOCupomVinculado",
      "name": "NumCOOCupomVinculado",
      "type": "int",
      "size": 5
    },
    {
      "field": "NumCOODAV",
      "label": "NumCOODAV",
      "name": "NumCOODAV",
      "type": "int",
      "size": 5
    },
    {
      "field": "NumSerieECF",
      "label": "NumSerieECF",
      "name": "NumSerieECF",
      "type": "string",
      "size": 32
    },
    {
      "field": "CNPJCPFAdquirente",
      "label": "CNPJCPFAdquirente",
      "name": "CNPJCPFAdquirente",
      "type": "int",
      "size": 9
    },
    {
      "field": "ControleNum",
      "label": "ControleNum",
      "name": "ControleNum",
      "type": "int",
      "size": 9
    },
    {
      "field": "LocalEntregaAnterior",
      "label": "LocalEntregaAnterior",
      "name": "LocalEntregaAnterior",
      "type": "string",
      "size": 80
    },
    {
      "field": "ProximidadesAnterior",
      "label": "ProximidadesAnterior",
      "name": "ProximidadesAnterior",
      "type": "string",
      "size": 80
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 64
    },
    {
      "field": "NumPlaca",
      "label": "NumPlaca",
      "name": "NumPlaca",
      "type": "string",
      "size": 10
    },
    {
      "field": "FgEntregaFutura",
      "label": "FgEntregaFutura",
      "name": "FgEntregaFutura",
      "type": "string",
      "size": 1
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
      "field": "VlDespesasAcessorias",
      "label": "VlDespesasAcessorias",
      "name": "VlDespesasAcessorias",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgImprimePedidoSemVlUnitario",
      "label": "FgImprimePedidoSemVlUnitario",
      "name": "FgImprimePedidoSemVlUnitario",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlTotalPesoBruto",
      "label": "VlTotalPesoBruto",
      "name": "VlTotalPesoBruto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDescontoCombo",
      "label": "VlDescontoCombo",
      "name": "VlDescontoCombo",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
