import { TTable } from "../../../../types";

export const tEmpresa: TTable = {
  database: "oftalmo",
  table: "tEmpresa",
  fields: [
    {
      field: "kEmpresa",
      label: "kEmpresa",
      name: "tEmpresa_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeEmpresa",
      label: "NomeEmpresa",
      name: "NomeEmpresa",
      type: "string",
      size: 35,
      allowNull: false,
    },
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "CNPJ",
      type: "string",
      size: 14,
    },
  ],
};
