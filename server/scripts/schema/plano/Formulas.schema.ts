import { TTableDef } from "../../../../types/model";

export const Formulas: TTableDef = {
  database: "plano",
  table: "Formulas",
  fields: [
    {
      field: "Origem",
      label: "Origem",
      name: "Origem",
      typeField: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "Destino",
      label: "Destino",
      name: "Destino",
      typeField: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "Formula",
      label: "Formula",
      name: "Formula",
      typeField: "string",
      size: 50,
    },
  ],
};
