import { TTableDef } from "@/types/model";

export const FrenteVersoSacolas: TTableDef = {
  database: "plano",
  table: "FrenteVersoSacolas",
  fields: [
    {
      field: "CdFrenteVerso",
      label: "CdFrenteVerso",
      name: "FrenteVersoSacolas_id",
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
