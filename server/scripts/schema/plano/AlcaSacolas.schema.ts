import { TTableDef } from "@/types/model";

export const AlcaSacolas: TTableDef = {
  database: "plano",
  table: "AlcaSacolas",
  fields: [
    {
      field: "CdAlca",
      label: "CdAlca",
      name: "AlcaSacolas_id",
      typeField: "int",

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
