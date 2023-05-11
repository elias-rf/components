import { TTableDef } from "@/types/model";

export const MestreFormula: TTableDef = {
  database: "plano",
  table: "MestreFormula",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEmissao",
      label: "HrEmissao",
      name: "HrEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdTipoFormula",
      label: "CdTipoFormula",
      name: "CdTipoFormula",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEntregaPrevista",
      label: "DtEntregaPrevista",
      name: "DtEntregaPrevista",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrEntregaPrevista",
      label: "HrEntregaPrevista",
      name: "HrEntregaPrevista",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "cdFase",
      label: "cdFase",
      name: "cdFase",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtFabricacao",
      label: "DtFabricacao",
      name: "DtFabricacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtValidade",
      label: "DtValidade",
      name: "DtValidade",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      typeField: "string",
    },
    {
      field: "DtConfirmacao",
      label: "DtConfirmacao",
      name: "DtConfirmacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgSemiAcabado",
      label: "FgSemiAcabado",
      name: "FgSemiAcabado",
      typeField: "string",
    },
    {
      field: "TipoPedido",
      label: "TipoPedido",
      name: "TipoPedido",
      typeField: "string",
    },
    {
      field: "FgFormulaRepetida",
      label: "FgFormulaRepetida",
      name: "FgFormulaRepetida",
      typeField: "string",
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
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumLote",
      label: "NumLote",
      name: "NumLote",
      typeField: "string",
    },
    {
      field: "QuantidadePrevista",
      label: "QuantidadePrevista",
      name: "QuantidadePrevista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      typeField: "string",
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "string",
    },
    {
      field: "TipoCaixa",
      label: "TipoCaixa",
      name: "TipoCaixa",
      typeField: "string",
    },
    {
      field: "PecasCaixa",
      label: "PecasCaixa",
      name: "PecasCaixa",
      typeField: "string",
    },
    {
      field: "CdProdutoGrelha",
      label: "CdProdutoGrelha",
      name: "CdProdutoGrelha",
      typeField: "string",
    },
    {
      field: "CdLoteGrelha",
      label: "CdLoteGrelha",
      name: "CdLoteGrelha",
      typeField: "string",
    },
    {
      field: "QtdeLoteGrelha",
      label: "QtdeLoteGrelha",
      name: "QtdeLoteGrelha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Maquina",
      label: "Maquina",
      name: "Maquina",
      typeField: "string",
    },
    {
      field: "Operador",
      label: "Operador",
      name: "Operador",
      typeField: "string",
    },
    {
      field: "CdLoteEmbalagem",
      label: "CdLoteEmbalagem",
      name: "CdLoteEmbalagem",
      typeField: "string",
    },
    {
      field: "DtProducao",
      label: "DtProducao",
      name: "DtProducao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgCancelado",
      label: "FgCancelado",
      name: "FgCancelado",
      typeField: "string",
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
    {
      field: "QtdePerda",
      label: "QtdePerda",
      name: "QtdePerda",
      typeField: "float",

      scale: 4,
    },
  ],
};
