import { TEntity } from "../../../../types";

export const AcumuladoresParciais: TEntity = {
  database: "plano",
  table: "AcumuladoresParciais",
  schema: [
    {
      field: "CdAcumuladorParcial",
      label: "CdAcumuladorParcial",
      name: "CdAcumuladorParcial",
      type: "int",
      size: 4,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
    },
  ],
};
