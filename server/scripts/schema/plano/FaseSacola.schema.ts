import { TTableDef } from "@/types/model";

export const FaseSacola: TTableDef = {
  database: "plano",
  table: "FaseSacola",
  fields: [
    {
      field: "CdFaseSacola",
      label: "CdFaseSacola",
      name: "FaseSacola_id",
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
