import { TEntity } from "@er/types/*";

export const MestreFormula: TEntity =
  {
  "database": "plano",
  "table": "MestreFormula",
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
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrEmissao",
      "label": "HrEmissao",
      "name": "HrEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdTipoFormula",
      "label": "CdTipoFormula",
      "name": "CdTipoFormula",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtEntregaPrevista",
      "label": "DtEntregaPrevista",
      "name": "DtEntregaPrevista",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrEntregaPrevista",
      "label": "HrEntregaPrevista",
      "name": "HrEntregaPrevista",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "cdFase",
      "label": "cdFase",
      "name": "cdFase",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Valor",
      "label": "Valor",
      "name": "Valor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtFabricacao",
      "label": "DtFabricacao",
      "name": "DtFabricacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtValidade",
      "label": "DtValidade",
      "name": "DtValidade",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Posologia",
      "label": "Posologia",
      "name": "Posologia",
      "type": "string",
      "size": 1024
    },
    {
      "field": "DtConfirmacao",
      "label": "DtConfirmacao",
      "name": "DtConfirmacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgSemiAcabado",
      "label": "FgSemiAcabado",
      "name": "FgSemiAcabado",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoPedido",
      "label": "TipoPedido",
      "name": "TipoPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFormulaRepetida",
      "label": "FgFormulaRepetida",
      "name": "FgFormulaRepetida",
      "type": "string",
      "size": 1
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
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumLote",
      "label": "NumLote",
      "name": "NumLote",
      "type": "string",
      "size": 64
    },
    {
      "field": "QuantidadePrevista",
      "label": "QuantidadePrevista",
      "name": "QuantidadePrevista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Largura",
      "label": "Largura",
      "name": "Largura",
      "type": "string",
      "size": 64
    },
    {
      "field": "Espessura",
      "label": "Espessura",
      "name": "Espessura",
      "type": "string",
      "size": 64
    },
    {
      "field": "TipoCaixa",
      "label": "TipoCaixa",
      "name": "TipoCaixa",
      "type": "string",
      "size": 64
    },
    {
      "field": "PecasCaixa",
      "label": "PecasCaixa",
      "name": "PecasCaixa",
      "type": "string",
      "size": 64
    },
    {
      "field": "CdProdutoGrelha",
      "label": "CdProdutoGrelha",
      "name": "CdProdutoGrelha",
      "type": "string",
      "size": 64
    },
    {
      "field": "CdLoteGrelha",
      "label": "CdLoteGrelha",
      "name": "CdLoteGrelha",
      "type": "string",
      "size": 64
    },
    {
      "field": "QtdeLoteGrelha",
      "label": "QtdeLoteGrelha",
      "name": "QtdeLoteGrelha",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Maquina",
      "label": "Maquina",
      "name": "Maquina",
      "type": "string",
      "size": 64
    },
    {
      "field": "Operador",
      "label": "Operador",
      "name": "Operador",
      "type": "string",
      "size": 64
    },
    {
      "field": "CdLoteEmbalagem",
      "label": "CdLoteEmbalagem",
      "name": "CdLoteEmbalagem",
      "type": "string",
      "size": 64
    },
    {
      "field": "DtProducao",
      "label": "DtProducao",
      "name": "DtProducao",
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
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
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
      "field": "FgCancelado",
      "label": "FgCancelado",
      "name": "FgCancelado",
      "type": "string",
      "size": 1
    },
    {
      "field": "Obs",
      "label": "Obs",
      "name": "Obs",
      "type": "string",
      "size": 1024
    },
    {
      "field": "QtdePerda",
      "label": "QtdePerda",
      "name": "QtdePerda",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}