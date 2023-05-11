import { TTableDef } from "@/types/model";

export const Fechamento: TTableDef = {
  database: "plano",
  table: "Fechamento",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
    },
    {
      field: "AnoFec",
      label: "AnoFec",
      name: "AnoFec",
      typeField: "int",
    },
    {
      field: "MesFec",
      label: "MesFec",
      name: "MesFec",
      typeField: "int",
    },
    {
      field: "SitFec",
      label: "SitFec",
      name: "SitFec",
      typeField: "string",
    },
  ],
};
