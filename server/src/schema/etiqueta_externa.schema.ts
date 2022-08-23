import { TEntity } from "@er/types/*";

export const etiqueta_externa: TEntity = {
  database: "oftalmo",
  table: "tbl_producao_etiqueta",
  fields: [
    {
      field: "controle",
      label: "Controle",
      name: "etiqueta_externa_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "qtdImpressao",
      label: "Quantidade",
      name: "quantidade",
      type: "int",
    },
    {
      field: "dataFabricacao",
      label: "Data Fabricacao",
      name: "data_fabricacao",
      type: "date",
    },
  ],
};
