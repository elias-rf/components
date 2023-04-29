import { TTableDef } from "@mono/types/model";

export const Agencia: TTableDef = {
  database: "plano",
  table: "Agencia",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmAgencia",
      label: "NmAgencia",
      name: "NmAgencia",
      typeField: "string",
      size: 50,
    },
    {
      field: "DVAgencia",
      label: "DVAgencia",
      name: "DVAgencia",
      typeField: "string",
      size: 25,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
