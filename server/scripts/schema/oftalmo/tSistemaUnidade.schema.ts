import { TEntity } from "../../../../types";

export const tSistemaUnidade: TEntity = {
  database: "oftalmo",
  table: "tSistemaUnidade",
  schema: [
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
