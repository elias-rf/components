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
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 70,
      allowNull: false,
    },
  ],
};
