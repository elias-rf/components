import { TTableDef } from "@/types/model";

export const ParametrosFiscaisNop: TTableDef = {
  database: "plano",
  table: "ParametrosFiscaisNop",
  fields: [
    {
      field: "IdParametro",
      label: "IdParametro",
      name: "IdParametro",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",

      allowNull: false,
    },
  ],
};
