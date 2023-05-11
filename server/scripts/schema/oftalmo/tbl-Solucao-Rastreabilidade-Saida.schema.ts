import { TTableDef } from "@/types/model";

export const tbl_Solucao_Rastreabilidade_Saida: TTableDef = {
  database: "oftalmo",
  table: "tbl_Solucao_Rastreabilidade_Saida",
  fields: [
    {
      field: "kRastreabilidade",
      label: "kRastreabilidade",
      name: "tbl_Solucao_Rastreabilidade_Saida_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkSaida",
      label: "fkSaida",
      name: "fkSaida",
      typeField: "int",
    },
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "fkProdutoItem",
      typeField: "int",
    },
    {
      field: "Lote",
      label: "Lote",
      name: "Lote",
      typeField: "string",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
    },
  ],
};
