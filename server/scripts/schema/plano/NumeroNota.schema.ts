import { TTable } from "../../../../types/model";

export const NumeroNota: TTable = {
  database: "plano",
  table: "NumeroNota",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumUltNota",
      label: "NumUltNota",
      name: "NumUltNota",
      typeField: "int",
      size: 4,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
