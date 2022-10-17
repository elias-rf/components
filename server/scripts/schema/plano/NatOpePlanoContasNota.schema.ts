import { TEntity } from "../../../../types";

export const NatOpePlanoContasNota: TEntity = {
  database: "plano",
  table: "NatOpePlanoContasNota",
  fields: [
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "CdDepartamento",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      type: "int",
      size: 9,
    },
  ],
};
