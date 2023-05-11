import { TTableDef } from "@/types/model";

export const ClassesERIBEIRO: TTableDef = {
  database: "plano",
  table: "ClassesERIBEIRO",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "ClassesERIBEIRO_id",
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
