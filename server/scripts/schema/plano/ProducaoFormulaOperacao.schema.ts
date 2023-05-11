import { TTableDef } from "@/types/model";

export const ProducaoFormulaOperacao: TTableDef = {
  database: "plano",
  table: "ProducaoFormulaOperacao",
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
      field: "CdOperacao",
      label: "CdOperacao",
      name: "CdOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeConforme",
      label: "QtdeConforme",
      name: "QtdeConforme",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeRetrabalho",
      label: "QtdeRetrabalho",
      name: "QtdeRetrabalho",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdMaquina",
      label: "CdMaquina",
      name: "CdMaquina",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdOperador",
      label: "CdOperador",
      name: "CdOperador",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInicio",
      label: "DtInicio",
      name: "DtInicio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtTermino",
      label: "DtTermino",
      name: "DtTermino",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdOperacaoRetrabalho",
      label: "CdOperacaoRetrabalho",
      name: "CdOperacaoRetrabalho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeNaoConforme",
      label: "QtdeNaoConforme",
      name: "QtdeNaoConforme",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeReclassificacao",
      label: "QtdeReclassificacao",
      name: "QtdeReclassificacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SequenciaOperacao",
      label: "SequenciaOperacao",
      name: "SequenciaOperacao",
      typeField: "int",
    },
  ],
};
