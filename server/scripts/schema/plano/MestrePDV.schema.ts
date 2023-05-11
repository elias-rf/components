import { TTableDef } from "@/types/model";

export const MestrePDV: TTableDef = {
  database: "plano",
  table: "MestrePDV",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtReal",
      label: "DtReal",
      name: "DtReal",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdCaixa",
      label: "CdCaixa",
      name: "CdCaixa",
      typeField: "string",
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
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
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDescGer",
      label: "VlDescGer",
      name: "VlDescGer",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CupomRef",
      label: "CupomRef",
      name: "CupomRef",
      typeField: "int",
    },
    {
      field: "NumCRM",
      label: "NumCRM",
      name: "NumCRM",
      typeField: "int",
    },
    {
      field: "Atualizacao",
      label: "Atualizacao",
      name: "Atualizacao",
      typeField: "string",
    },
    {
      field: "TipoConvenio",
      label: "TipoConvenio",
      name: "TipoConvenio",
      typeField: "int",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
    },
    {
      field: "VlTroco",
      label: "VlTroco",
      name: "VlTroco",
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
      field: "VlCreditoVMS",
      label: "VlCreditoVMS",
      name: "VlCreditoVMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
    },
    {
      field: "CdSetor",
      label: "CdSetor",
      name: "CdSetor",
      typeField: "int",
    },
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
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
      field: "NumCCF",
      label: "NumCCF",
      name: "NumCCF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSerieECF",
      label: "NumSerieECF",
      name: "NumSerieECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MfAdicional",
      label: "MfAdicional",
      name: "MfAdicional",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloECF",
      label: "ModeloECF",
      name: "ModeloECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumUsuario",
      label: "NumUsuario",
      name: "NumUsuario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VLISS",
      label: "VLISS",
      name: "VLISS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgTipoCancelamento",
      label: "FgTipoCancelamento",
      name: "FgTipoCancelamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoISS",
      label: "VlBaseCalculoISS",
      name: "VlBaseCalculoISS",
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
      field: "VlAproximadoImpostoCupom",
      label: "VlAproximadoImpostoCupom",
      name: "VlAproximadoImpostoCupom",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleECF",
      label: "ControleECF",
      name: "ControleECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ControleCupom",
      label: "ControleCupom",
      name: "ControleCupom",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgSituacaoGerencial",
      label: "FgSituacaoGerencial",
      name: "FgSituacaoGerencial",
      typeField: "string",
    },
    {
      field: "FgSituacaoFiscal",
      label: "FgSituacaoFiscal",
      name: "FgSituacaoFiscal",
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
      field: "CPFCNPJ",
      label: "CPFCNPJ",
      name: "CPFCNPJ",
      typeField: "string",
    },
  ],
};
