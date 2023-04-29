import { TTableDef } from "@mono/types/model";

export const tSistemaUnidade: TTableDef = {
  database: "oftalmo",
  table: "tSistemaUnidade",
  fields: [
    {
      field: "KUnidade",
      label: "KUnidade",
      name: "tSistemaUnidade_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Abreviatura",
      label: "Abreviatura",
      name: "Abreviatura",
      typeField: "string",
      size: 5,
    },
    {
      field: "NomeUnidade",
      label: "NomeUnidade",
      name: "NomeUnidade",
      typeField: "string",
      size: 10,
    },
  ],
};
