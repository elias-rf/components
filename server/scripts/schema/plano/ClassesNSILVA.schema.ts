import { TTableDef } from "@/types/model";

export const ClassesNSILVA: TTableDef = {
  database: "plano",
  table: "ClassesNSILVA",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "ClassesNSILVA_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
