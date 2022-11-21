import { TTable } from "../../../../types";

export const tbl_Solucao_Controle_Lote: TTable = {
  database: "oftalmo",
  table: "tbl_Solucao_Controle_Lote",
  fields: [
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "fkProdutoItem",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Lote",
      label: "Lote",
      name: "Lote",
      type: "string",
      size: 10,
      allowNull: false,
    },
  ],
};
