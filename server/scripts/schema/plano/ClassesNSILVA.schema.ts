import { TEntity } from "../../../../types";

export const ClassesNSILVA: TEntity = {
  database: "plano",
  table: "ClassesNSILVA",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "ClassesNSILVA_id",
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
