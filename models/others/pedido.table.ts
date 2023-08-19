import { TTableDef } from "@/types";

export const pedido: TTableDef = {
  database: "plano",
  table: "MestrePedido",
  fields: [
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "float",

      scale: 4,
      primaryKey: true,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",
    },
    {
      field: "CdTransportadora",
      label: "CdTransportadora",
      name: "CdTransportadora",
      typeField: "int",
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "int",
    },
    {
      field: "ComboFilial",
      label: "ComboFilial",
      name: "ComboFilial",
      typeField: "int",
    },
    {
      field: "CondFaturamento",
      label: "CondFaturamento",
      name: "CondFaturamento",
      typeField: "string",
    },
    {
      field: "CondPgto",
      label: "CondPgto",
      name: "CondPgto",
      typeField: "string",
    },
    {
      field: "DtColocacao",
      label: "DtColocacao",
      name: "DtColocacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtEntrega",
      label: "DtEntrega",
      name: "DtEntrega",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "FgSomaIPI",
      label: "FgSomaIPI",
      name: "FgSomaIPI",
      typeField: "string",
    },
    {
      field: "FgVendaFilial",
      label: "FgVendaFilial",
      name: "FgVendaFilial",
      typeField: "string",
    },
    {
      field: "Garantia",
      label: "Garantia",
      name: "Garantia",
      typeField: "string",
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NmConfirmacao",
      label: "NmConfirmacao",
      name: "NmConfirmacao",
      typeField: "string",
    },
    {
      field: "NmFavorecido",
      label: "NmFavorecido",
      name: "NmFavorecido",
      typeField: "string",
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "NumPedidoEmitente",
      label: "NumPedidoEmitente",
      name: "NumPedidoEmitente",
      typeField: "string",
    },
    {
      field: "NumRecibo",
      label: "NumRecibo",
      name: "NumRecibo",
      typeField: "int",
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
    {
      field: "Op_Transferencia",
      label: "Op_Transferencia",
      name: "Op_Transferencia",
      typeField: "string",
    },
    {
      field: "PercAcrescimo",
      label: "PercAcrescimo",
      name: "PercAcrescimo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoPrazo",
      label: "PercComissaoPrazo",
      name: "PercComissaoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoVista",
      label: "PercComissaoVista",
      name: "PercComissaoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDesconto",
      label: "PercDesconto",
      name: "PercDesconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoFrete",
      label: "TipoFrete",
      name: "TipoFrete",
      typeField: "string",
    },
    {
      field: "Validade",
      label: "Validade",
      name: "Validade",
      typeField: "string",
    },
    {
      field: "VlAcrescimo",
      label: "VlAcrescimo",
      name: "VlAcrescimo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPago",
      label: "VlPago",
      name: "VlPago",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdSetor",
      label: "CdSetor",
      name: "CdSetor",
      typeField: "int",
    },
    {
      field: "FgPreVenda",
      label: "FgPreVenda",
      name: "FgPreVenda",
      typeField: "string",
    },
    {
      field: "HrEntrega",
      label: "HrEntrega",
      name: "HrEntrega",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "ModeloPedido",
      label: "ModeloPedido",
      name: "ModeloPedido",
      typeField: "string",
    },
    {
      field: "CdStatus",
      label: "CdStatus",
      name: "CdStatus",
      typeField: "int",
    },
    {
      field: "VlFrete",
      label: "VlFrete",
      name: "VlFrete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdCondPagtoChe",
      label: "CdCondPagtoChe",
      name: "CdCondPagtoChe",
      typeField: "int",
    },
    {
      field: "CdTipoEntrega",
      label: "CdTipoEntrega",
      name: "CdTipoEntrega",
      typeField: "int",
    },
    {
      field: "CdCondPagto",
      label: "CdCondPagto",
      name: "CdCondPagto",
      typeField: "int",
    },
    {
      field: "HrEntregaIni",
      label: "HrEntregaIni",
      name: "HrEntregaIni",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrEntregaFim",
      label: "HrEntregaFim",
      name: "HrEntregaFim",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlTaxaEntrega",
      label: "VlTaxaEntrega",
      name: "VlTaxaEntrega",
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
      field: "PercComissaoVistaExtra",
      label: "PercComissaoVistaExtra",
      name: "PercComissaoVistaExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoPrazoExtra",
      label: "PercComissaoPrazoExtra",
      name: "PercComissaoPrazoExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdMatriculaVMS",
      label: "CdMatriculaVMS",
      name: "CdMatriculaVMS",
      typeField: "string",
    },
    {
      field: "NSU",
      label: "NSU",
      name: "NSU",
      typeField: "string",
    },
    {
      field: "VlCreditoVMS",
      label: "VlCreditoVMS",
      name: "VlCreditoVMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "OperadoraVMS",
      label: "OperadoraVMS",
      name: "OperadoraVMS",
      typeField: "string",
    },
    {
      field: "FgEnvioCaneta",
      label: "FgEnvioCaneta",
      name: "FgEnvioCaneta",
      typeField: "string",
    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      typeField: "string",
    },
    {
      field: "CdProjeto",
      label: "CdProjeto",
      name: "CdProjeto",
      typeField: "int",
    },
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      typeField: "int",
    },
    {
      field: "FgStatusOrdem",
      label: "FgStatusOrdem",
      name: "FgStatusOrdem",
      typeField: "string",
    },
    {
      field: "FgConferencia",
      label: "FgConferencia",
      name: "FgConferencia",
      typeField: "string",
    },
    {
      field: "Contato",
      label: "Contato",
      name: "Contato",
      typeField: "string",
    },
    {
      field: "Departamento",
      label: "Departamento",
      name: "Departamento",
      typeField: "string",
    },
    {
      field: "AssisTecnica",
      label: "AssisTecnica",
      name: "AssisTecnica",
      typeField: "string",
    },
    {
      field: "PrazoEntrega",
      label: "PrazoEntrega",
      name: "PrazoEntrega",
      typeField: "string",
    },
    {
      field: "FgRateio",
      label: "FgRateio",
      name: "FgRateio",
      typeField: "string",
    },
    {
      field: "CondPagamentoIni",
      label: "CondPagamentoIni",
      name: "CondPagamentoIni",
      typeField: "int",
    },
    {
      field: "FgEndComercial",
      label: "FgEndComercial",
      name: "FgEndComercial",
      typeField: "string",
    },
    {
      field: "CdClienteImpressao",
      label: "CdClienteImpressao",
      name: "CdClienteImpressao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumPedidoOriginal",
      label: "NumPedidoOriginal",
      name: "NumPedidoOriginal",
      typeField: "float",
    },
    {
      field: "FgBuscaReceita",
      label: "FgBuscaReceita",
      name: "FgBuscaReceita",
      typeField: "string",
    },
    {
      field: "FgVendaConsultorio",
      label: "FgVendaConsultorio",
      name: "FgVendaConsultorio",
      typeField: "string",
    },
    {
      field: "DestinoMaterial",
      label: "DestinoMaterial",
      name: "DestinoMaterial",
      typeField: "string",
    },
    {
      field: "VlIPIFrete",
      label: "VlIPIFrete",
      name: "VlIPIFrete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgObrigaNotaFiscal",
      label: "FgObrigaNotaFiscal",
      name: "FgObrigaNotaFiscal",
      typeField: "string",
    },
    {
      field: "NumECFCupomVinculado",
      label: "NumECFCupomVinculado",
      name: "NumECFCupomVinculado",
      typeField: "int",
    },
    {
      field: "NumCOOCupomVinculado",
      label: "NumCOOCupomVinculado",
      name: "NumCOOCupomVinculado",
      typeField: "int",
    },
    {
      field: "NumCOODAV",
      label: "NumCOODAV",
      name: "NumCOODAV",
      typeField: "int",
    },
    {
      field: "NumSerieECF",
      label: "NumSerieECF",
      name: "NumSerieECF",
      typeField: "string",
    },
    {
      field: "CNPJCPFAdquirente",
      label: "CNPJCPFAdquirente",
      name: "CNPJCPFAdquirente",
      typeField: "int",
    },
    {
      field: "ControleNum",
      label: "ControleNum",
      name: "ControleNum",
      typeField: "int",
    },
    {
      field: "LocalEntregaAnterior",
      label: "LocalEntregaAnterior",
      name: "LocalEntregaAnterior",
      typeField: "string",
    },
    {
      field: "ProximidadesAnterior",
      label: "ProximidadesAnterior",
      name: "ProximidadesAnterior",
      typeField: "string",
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
    },
    {
      field: "NumPlaca",
      label: "NumPlaca",
      name: "NumPlaca",
      typeField: "string",
    },
    {
      field: "FgEntregaFutura",
      label: "FgEntregaFutura",
      name: "FgEntregaFutura",
      typeField: "string",
    },
    {
      field: "VlSeguro",
      label: "VlSeguro",
      name: "VlSeguro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDespesasAcessorias",
      label: "VlDespesasAcessorias",
      name: "VlDespesasAcessorias",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgImprimePedidoSemVlUnitario",
      label: "FgImprimePedidoSemVlUnitario",
      name: "FgImprimePedidoSemVlUnitario",
      typeField: "string",
    },
    {
      field: "VlTotalPesoBruto",
      label: "VlTotalPesoBruto",
      name: "VlTotalPesoBruto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDescontoCombo",
      label: "VlDescontoCombo",
      name: "VlDescontoCombo",
      typeField: "float",

      scale: 4,
    },
  ],
};
