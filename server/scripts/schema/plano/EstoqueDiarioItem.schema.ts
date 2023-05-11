import { TTableDef } from "@/types/model";

export const EstoqueDiarioItem: TTableDef = {
  database: "plano",
  table: "EstoqueDiarioItem",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DescricaoProduto",
      label: "DescricaoProduto",
      name: "DescricaoProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UnidadeProduto",
      label: "UnidadeProduto",
      name: "UnidadeProduto",
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
      field: "ControleNum",
      label: "ControleNum",
      name: "ControleNum",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ControleData",
      label: "ControleData",
      name: "ControleData",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CodigoNCM",
      label: "CodigoNCM",
      name: "CodigoNCM",
      typeField: "string",
    },
    {
      field: "CEST",
      label: "CEST",
      name: "CEST",
      typeField: "int",
    },
  ],
};
