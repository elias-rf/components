import { TTableDef } from "@/types/model";

export const NatOpeNaoAutorizada: TTableDef = {
  database: "plano",
  table: "NatOpeNaoAutorizada",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
