import { TTable } from "../../../../types";

export const Fechamento: TTable = {
  database: "plano",
  table: "Fechamento",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 4,
    },
    {
      field: "AnoFec",
      label: "AnoFec",
      name: "AnoFec",
      type: "int",
      size: 4,
    },
    {
      field: "MesFec",
      label: "MesFec",
      name: "MesFec",
      type: "int",
      size: 4,
    },
    {
      field: "SitFec",
      label: "SitFec",
      name: "SitFec",
      type: "string",
      size: 1,
    },
  ],
};
