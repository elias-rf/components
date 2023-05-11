import { TTableDef } from "@/types/model";

export const TempDanfe: TTableDef = {
  database: "plano",
  table: "TempDanfe",
  fields: [
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
      field: "SequenciaNota",
      label: "SequenciaNota",
      name: "SequenciaNota",
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
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NCM",
      label: "NCM",
      name: "NCM",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CST",
      label: "CST",
      name: "CST",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CFOP",
      label: "CFOP",
      name: "CFOP",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
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
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlTotalItem",
      label: "VlTotalItem",
      name: "VlTotalItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaIPI",
      label: "AliquotaIPI",
      name: "AliquotaIPI",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAproximadoImpostoItem",
      label: "VlAproximadoImpostoItem",
      name: "VlAproximadoImpostoItem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBrutoItem",
      label: "VlBrutoItem",
      name: "VlBrutoItem",
      typeField: "float",

      scale: 4,
    },
  ],
};
