import { TTableDef } from "@/types/model";

export const CancelamentoCupomLote: TTableDef = {
  database: "plano",
  table: "CancelamentoCupomLote",
  fields: [
    {
      field: "cdFilial",
      label: "cdFilial",
      name: "cdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",

      scale: 4,
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
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
