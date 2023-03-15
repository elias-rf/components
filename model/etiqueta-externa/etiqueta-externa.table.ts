import { TTable } from "../../types";

export const etiqueta_externa: TTable = {
  database: "oftalmo",
  table: "tEtiqueta",
  fields: [
    {
      field: "controle",
      label: "Controle",
      name: "etiqueta_externa_id",
      primaryKey: true,
      typeField: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "qtdImpressao",
      label: "Quantidade",
      name: "quantidade",
      typeField: "int",
      size: 4,
      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "dataFabricacao",
      label: "Data Fabricacao",
      name: "data_fabricacao",
      typeField: "date",
      size: 8,
      scale: 3,
    },
  ],
};
