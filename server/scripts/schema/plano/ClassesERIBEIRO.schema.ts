import { TTable } from "../../../../types";

export const ClassesERIBEIRO: TTable = {
  database: "plano",
  table: "ClassesERIBEIRO",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "ClassesERIBEIRO_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
