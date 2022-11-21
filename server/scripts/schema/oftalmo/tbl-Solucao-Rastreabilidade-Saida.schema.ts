import { TTable } from "../../../../types";

export const tbl_Solucao_Rastreabilidade_Saida: TTable = {
  database: "oftalmo",
  table: "tbl_Solucao_Rastreabilidade_Saida",
  fields: [
    {
      field: "kRastreabilidade",
      label: "kRastreabilidade",
      name: "tbl_Solucao_Rastreabilidade_Saida_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkSaida",
      label: "fkSaida",
      name: "fkSaida",
      type: "int",
      size: 4,
    },
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "fkProdutoItem",
      type: "int",
      size: 4,
    },
    {
      field: "Lote",
      label: "Lote",
      name: "Lote",
      type: "string",
      size: 10,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "int",
      size: 4,
    },
  ],
};
