import { TTableDef } from "@/types/model";

export const ProdutosIndisponiveis: TTableDef = {
  database: "plano",
  table: "ProdutosIndisponiveis",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumLote",
      label: "NumLote",
      name: "NumLote",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgStatus",
      label: "FgStatus",
      name: "FgStatus",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgMotivo",
      label: "FgMotivo",
      name: "FgMotivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtLcto",
      label: "DtLcto",
      name: "DtLcto",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
  ],
};
