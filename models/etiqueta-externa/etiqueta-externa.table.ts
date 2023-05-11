import { TTableDef } from "@/types";

export const etiqueta_externa: TTableDef = {
  database: "oftalmo",
  table: "tEtiqueta",
  fields: [
    {
      field: "controle",
      label: "Controle",
      name: "etiqueta_externa_id",
      primaryKey: true,
      typeField: "string",

      allowNull: false,
    },
    {
      field: "qtdImpressao",
      label: "Quantidade",
      name: "quantidade",
      typeField: "int",

      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "dataFabricacao",
      label: "Data Fabricacao",
      name: "data_fabricacao",
      typeField: "date",

      scale: 3,
    },
  ],
};
