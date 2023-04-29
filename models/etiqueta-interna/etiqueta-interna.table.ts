import { TTableDef } from "@mono/types";

export const etiqueta_interna: TTableDef = {
  database: "oftalmo",
  table: "tbl_producao_etiqueta",
  fields: [
    {
      field: "NumControle",
      label: "Cód",
      name: "etiqueta_interna_id",
      typeField: "string",
      size: 18,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkProdutoItem",
      label: "Cód Produto",
      name: "produto_item_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "DataInsercao",
      label: "Data",
      name: "data",
      typeField: "date",
      size: 4,
    },
  ],
};
