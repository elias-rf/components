import { TTableDef } from "@/types/model";

export const Feriados: TTableDef = {
  database: "plano",
  table: "Feriados",
  fields: [
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtFeriado",
      label: "DtFeriado",
      name: "DtFeriado",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
