import { TTableDef } from "@mono/types/model";

export const ClassesERIBEIRO: TTableDef = {
  database: "plano",
  table: "ClassesERIBEIRO",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "ClassesERIBEIRO_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
