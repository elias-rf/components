import { TTableDef } from "@mono/types/model";

export const Moedas: TTableDef = {
  database: "plano",
  table: "Moedas",
  fields: [
    {
      field: "CdMoeda",
      label: "CdMoeda",
      name: "Moedas_id",
      typeField: "string",
      size: 15,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
