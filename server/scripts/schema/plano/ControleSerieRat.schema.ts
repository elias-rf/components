import { TEntity } from "../../../../types";

export const ControleSerieRat: TEntity = {
  database: "plano",
  table: "ControleSerieRat",
  schema: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      type: "string",
      size: 100,
    },
  ],
};
