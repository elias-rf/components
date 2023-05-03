import { TTableDef } from "@/types/model";

export const Tratamento: TTableDef = {
  database: "plano",
  table: "Tratamento",
  fields: [
    {
      field: "Comprimento",
      label: "Comprimento",
      name: "Comprimento",
      typeField: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "NumCliche",
      label: "NumCliche",
      name: "NumCliche",
      typeField: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "FormulaTratamento",
      label: "FormulaTratamento",
      name: "FormulaTratamento",
      typeField: "string",
      size: 70,
      allowNull: false,
    },
  ],
};
