import { TTableDef } from "@/types/model";

export const tbl_Solucao_Controle_Lote: TTableDef = {
  database: "oftalmo",
  table: "tbl_Solucao_Controle_Lote",
  fields: [
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "fkProdutoItem",
      typeField: "int",

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
      field: "Lote",
      label: "Lote",
      name: "Lote",
      typeField: "string",

      allowNull: false,
    },
  ],
};
