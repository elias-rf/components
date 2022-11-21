import { TTable } from "../../../../types";

export const tSistemaUnidade: TTable = {
  database: "oftalmo",
  table: "tSistemaUnidade",
  fields: [
    {
      field: "KUnidade",
      label: "KUnidade",
      name: "tSistemaUnidade_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Abreviatura",
      label: "Abreviatura",
      name: "Abreviatura",
      type: "string",
      size: 5,
    },
    {
      field: "NomeUnidade",
      label: "NomeUnidade",
      name: "NomeUnidade",
      type: "string",
      size: 10,
    },
  ],
};
