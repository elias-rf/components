import { TTableDef } from "@mono/types/model";

export const ParametrosFiscaisNop: TTableDef = {
  database: "plano",
  table: "ParametrosFiscaisNop",
  fields: [
    {
      field: "IdParametro",
      label: "IdParametro",
      name: "IdParametro",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
  ],
};
