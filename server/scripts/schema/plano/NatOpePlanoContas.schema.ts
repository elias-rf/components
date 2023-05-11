import { TTableDef } from "@/types/model";

export const NatOpePlanoContas: TTableDef = {
  database: "plano",
  table: "NatOpePlanoContas",
  fields: [
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "CdDepartamento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "int",
    },
  ],
};
