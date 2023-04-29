import { TTableDef } from "@mono/types/model";

export const NatOpePlanoContas: TTableDef = {
  database: "plano",
  table: "NatOpePlanoContas",
  fields: [
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "CdDepartamento",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "int",
      size: 9,
    },
  ],
};
