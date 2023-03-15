import { TTable } from "../../../../types/model";

export const tEmpresa: TTable = {
  database: "oftalmo",
  table: "tEmpresa",
  fields: [
    {
      field: "kEmpresa",
      label: "kEmpresa",
      name: "tEmpresa_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeEmpresa",
      label: "NomeEmpresa",
      name: "NomeEmpresa",
      typeField: "string",
      size: 35,
      allowNull: false,
    },
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "CNPJ",
      typeField: "string",
      size: 14,
    },
  ],
};
