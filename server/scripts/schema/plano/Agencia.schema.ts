import { TEntity } from "../../../../types";

export const Agencia: TEntity = {
  database: "plano",
  table: "Agencia",
  schema: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmAgencia",
      label: "NmAgencia",
      name: "NmAgencia",
      type: "string",
      size: 50,
    },
    {
      field: "DVAgencia",
      label: "DVAgencia",
      name: "DVAgencia",
      type: "string",
      size: 25,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
