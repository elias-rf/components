import { TTableDef } from "@/types/model";

export const ArqDupPagamentos: TTableDef = {
  database: "plano",
  table: "ArqDupPagamentos",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Numdoc",
      label: "Numdoc",
      name: "Numdoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SeqDoc",
      label: "SeqDoc",
      name: "SeqDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtPagamento",
      label: "DtPagamento",
      name: "DtPagamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "SequenciaPgto",
      label: "SequenciaPgto",
      name: "SequenciaPgto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlAmortizado",
      label: "VlAmortizado",
      name: "VlAmortizado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlJuros",
      label: "VlJuros",
      name: "VlJuros",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoPgto",
      label: "TipoPgto",
      name: "TipoPgto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};
