import { TEntity } from "../../../../types";

export const NatOpeNaoAutorizada: TEntity = {
  database: "plano",
  table: "NatOpeNaoAutorizada",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
