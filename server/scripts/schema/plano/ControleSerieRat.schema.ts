import { TTableDef } from "../../../../types/model";

export const ControleSerieRat: TTableDef = {
  database: "plano",
  table: "ControleSerieRat",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 100,
    },
  ],
};
