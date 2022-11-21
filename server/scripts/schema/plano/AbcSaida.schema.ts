import { TTable } from "../../../../types";

export const AbcSaida: TTable = {
  database: "plano",
  table: "AbcSaida",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 126,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
