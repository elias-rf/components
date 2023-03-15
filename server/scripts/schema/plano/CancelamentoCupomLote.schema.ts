import { TTable } from "../../../../types/model";

export const CancelamentoCupomLote: TTable = {
  database: "plano",
  table: "CancelamentoCupomLote",
  fields: [
    {
      field: "cdFilial",
      label: "cdFilial",
      name: "cdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NumLote",
      label: "NumLote",
      name: "NumLote",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
