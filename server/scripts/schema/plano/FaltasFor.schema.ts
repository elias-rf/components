import { TTableDef } from "@/types/model";

export const FaltasFor: TTableDef = {
  database: "plano",
  table: "FaltasFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdReferencia",
      label: "CdReferencia",
      name: "CdReferencia",
      typeField: "string",
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
    },
    {
      field: "PrecoV",
      label: "PrecoV",
      name: "PrecoV",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PrecoF",
      label: "PrecoF",
      name: "PrecoF",
      typeField: "float",

      scale: 4,
    },
  ],
};
