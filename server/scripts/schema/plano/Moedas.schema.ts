import { TTableDef } from "@/types/model";

export const Moedas: TTableDef = {
  database: "plano",
  table: "Moedas",
  fields: [
    {
      field: "CdMoeda",
      label: "CdMoeda",
      name: "Moedas_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
