import { TTable } from "../../../../types";

export const Feriados: TTable = {
  database: "plano",
  table: "Feriados",
  fields: [
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
