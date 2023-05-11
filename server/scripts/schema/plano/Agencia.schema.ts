import { TTableDef } from "@/types/model";

export const Agencia: TTableDef = {
  database: "plano",
  table: "Agencia",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmAgencia",
      label: "NmAgencia",
      name: "NmAgencia",
      typeField: "string",
    },
    {
      field: "DVAgencia",
      label: "DVAgencia",
      name: "DVAgencia",
      typeField: "string",
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
