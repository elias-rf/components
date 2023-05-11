import { TTableDef } from "@/types/model";

export const Credenciadora: TTableDef = {
  database: "plano",
  table: "Credenciadora",
  fields: [
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "Credenciadora_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Codigo",
      label: "Codigo",
      name: "Codigo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Empresa",
      label: "Empresa",
      name: "Empresa",
      typeField: "string",
    },
  ],
};
