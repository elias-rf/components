import { TEntity } from "@er/types/*";

export const MestrePDV: TEntity =
  {
  "database": "plano",
  "table": "MestrePDV",
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
      "field": "NroPDV",
      "label": "NroPDV",
      "name": "NroPDV",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3
    },
    {
      "field": "CdTipoVenda",
      "label": "CdTipoVenda",
      "name": "CdTipoVenda",
      "type": "int",
      "size": 2
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
      "field": "DtReal",
      "label": "DtReal",
      "name": "DtReal",
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
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdCaixa",
      "label": "CdCaixa",
      "name": "CdCaixa",
      "type": "string",
      "size": 10
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
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
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
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDescGer",
      "label": "VlDescGer",
      "name": "VlDescGer",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CupomRef",
      "label": "CupomRef",
      "name": "CupomRef",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumCRM",
      "label": "NumCRM",
      "name": "NumCRM",
      "type": "int",
      "size": 4
    },
    {
      "field": "Atualizacao",
      "label": "Atualizacao",
      "name": "Atualizacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoConvenio",
      "label": "TipoConvenio",
      "name": "TipoConvenio",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4
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
      "field": "VlCreditoVMS",
      "label": "VlCreditoVMS",
      "name": "VlCreditoVMS",
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
      "field": "CdSetor",
      "label": "CdSetor",
      "name": "CdSetor",
      "type": "int",
      "size": 2
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
      "field": "NumCOO",
      "label": "NumCOO",
      "name": "NumCOO",
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
      "field": "NumCCF",
      "label": "NumCCF",
      "name": "NumCCF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumSerieECF",
      "label": "NumSerieECF",
      "name": "NumSerieECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "MfAdicional",
      "label": "MfAdicional",
      "name": "MfAdicional",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "ModeloECF",
      "label": "ModeloECF",
      "name": "ModeloECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumUsuario",
      "label": "NumUsuario",
      "name": "NumUsuario",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VLISS",
      "label": "VLISS",
      "name": "VLISS",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "FgTipoCancelamento",
      "label": "FgTipoCancelamento",
      "name": "FgTipoCancelamento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlICMS",
      "label": "VlICMS",
      "name": "VlICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoISS",
      "label": "VlBaseCalculoISS",
      "name": "VlBaseCalculoISS",
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
      "field": "VlAproximadoImpostoCupom",
      "label": "VlAproximadoImpostoCupom",
      "name": "VlAproximadoImpostoCupom",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ControleFilial",
      "label": "ControleFilial",
      "name": "ControleFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ControleECF",
      "label": "ControleECF",
      "name": "ControleECF",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ControleCupom",
      "label": "ControleCupom",
      "name": "ControleCupom",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgSituacaoGerencial",
      "label": "FgSituacaoGerencial",
      "name": "FgSituacaoGerencial",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSituacaoFiscal",
      "label": "FgSituacaoFiscal",
      "name": "FgSituacaoFiscal",
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
      "field": "CPFCNPJ",
      "label": "CPFCNPJ",
      "name": "CPFCNPJ",
      "type": "string",
      "size": 32
    }
  ]
}
