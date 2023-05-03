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
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Lote",
      label: "Lote",
      name: "Lote",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
  ],
};
