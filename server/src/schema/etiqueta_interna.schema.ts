import { TEntity } from "@er/types/*";

export const etiqueta_interna: TEntity = {
  database: "oftalmo",
  table: "tbl_producao_etiqueta",
  fields: [
    {
      field: "NumControle",
      label: "Cód",
      name: "controle_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "fkProdutoItem",
      label: "Cód Produto",
      name: "produto_item_id",
      type: "int",
    },
    {
      field: "DataInsercao",
      label: "Data",
      name: "data",
      type: "date",
    },
  ],
};
