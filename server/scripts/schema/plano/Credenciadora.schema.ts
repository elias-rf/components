import { TTableDef } from "../../../../types/model";

export const Credenciadora: TTableDef = {
  database: "plano",
  table: "Credenciadora",
  fields: [
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "Credenciadora_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Codigo",
      label: "Codigo",
      name: "Codigo",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Empresa",
      label: "Empresa",
      name: "Empresa",
      typeField: "string",
      size: 128,
    },
  ],
};
