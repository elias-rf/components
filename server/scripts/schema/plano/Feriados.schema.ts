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

      allowNull: false,
    },
    {
      field: "DtFeriado",
      label: "DtFeriado",
      name: "DtFeriado",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
