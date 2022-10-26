import { TEntity } from "../../../../types";

export const Feriados: TEntity = {
  database: "plano",
  table: "Feriados",
  schema: [
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtFeriado",
      label: "DtFeriado",
      name: "DtFeriado",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
