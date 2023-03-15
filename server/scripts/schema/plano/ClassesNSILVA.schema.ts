import { TTable } from "../../../../types/model";

export const ClassesNSILVA: TTable = {
  database: "plano",
  table: "ClassesNSILVA",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "ClassesNSILVA_id",
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
