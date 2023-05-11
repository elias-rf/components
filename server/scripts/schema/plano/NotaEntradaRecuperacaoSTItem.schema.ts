import { TTableDef } from "@/types/model";

export const NotaEntradaRecuperacaoSTItem: TTableDef = {
  database: "plano",
  table: "NotaEntradaRecuperacaoSTItem",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
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
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

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
      field: "VlBaseCalculoST",
      label: "VlBaseCalculoST",
      name: "VlBaseCalculoST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QuantidadeUtilizada",
      label: "QuantidadeUtilizada",
      name: "QuantidadeUtilizada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSSTRecolhido",
      label: "VlICMSSTRecolhido",
      name: "VlICMSSTRecolhido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSSTRecuperado",
      label: "VlICMSSTRecuperado",
      name: "VlICMSSTRecuperado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
