import { TEntity } from "../../../../types";

export const Credenciadora: TEntity = {
  database: "plano",
  table: "Credenciadora",
  schema: [
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "Credenciadora_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Codigo",
      label: "Codigo",
      name: "Codigo",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Empresa",
      label: "Empresa",
      name: "Empresa",
      type: "string",
      size: 128,
    },
  ],
};
