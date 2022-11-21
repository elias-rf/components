import { TTable } from "../types";

export const etiqueta_interna: TTable = {
  database: "oftalmo",
  table: "tbl_producao_etiqueta",
  fields: [
    {
      field: "NumControle",
      label: "Cód",
      name: "etiqueta_interna_id",
      type: "string",
      size: 18,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkProdutoItem",
      label: "Cód Produto",
      name: "produto_item_id",
      type: "int",
      size: 4,
    },
    {
      field: "DataInsercao",
      label: "Data",
      name: "data",
      type: "date",
      size: 4,
    },
  ],
};
