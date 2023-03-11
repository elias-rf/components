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
      type: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "qtdImpressao",
      label: "Quantidade",
      name: "quantidade",
      type: "int",
      size: 4,
      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "dataFabricacao",
      label: "Data Fabricacao",
      name: "data_fabricacao",
      type: "date",
      size: 8,
      scale: 3,
    },
  ],
};
