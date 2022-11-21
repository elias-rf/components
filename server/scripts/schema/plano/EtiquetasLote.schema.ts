import { TTable } from "../../../../types";

export const EtiquetasLote: TTable = {
  database: "plano",
  table: "EtiquetasLote",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdLote",
      label: "CdLote",
      name: "CdLote",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
