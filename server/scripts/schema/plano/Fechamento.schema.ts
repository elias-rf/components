import { TTable } from "../../../../types/model";

export const Fechamento: TTable = {
  database: "plano",
  table: "Fechamento",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 4,
    },
    {
      field: "AnoFec",
      label: "AnoFec",
      name: "AnoFec",
      typeField: "int",
      size: 4,
    },
    {
      field: "MesFec",
      label: "MesFec",
      name: "MesFec",
      typeField: "int",
      size: 4,
    },
    {
      field: "SitFec",
      label: "SitFec",
      name: "SitFec",
      typeField: "string",
      size: 1,
    },
  ],
};
