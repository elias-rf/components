import { TTableDef } from "@/types/model";

export const tEmpresa: TTableDef = {
  database: "oftalmo",
  table: "tEmpresa",
  fields: [
    {
      field: "kEmpresa",
      label: "kEmpresa",
      name: "tEmpresa_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeEmpresa",
      label: "NomeEmpresa",
      name: "NomeEmpresa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "CNPJ",
      typeField: "string",
    },
  ],
};
