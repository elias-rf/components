import { TTableDef } from "@/types/model";

export const MedicoAMIVida: TTableDef = {
  database: "plano",
  table: "MedicoAMIVida",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "MedicoAMIVida_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgEnvioMaterial",
      label: "FgEnvioMaterial",
      name: "FgEnvioMaterial",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEnvioBrindes",
      label: "FgEnvioBrindes",
      name: "FgEnvioBrindes",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgRelAcompanhamento",
      label: "FgRelAcompanhamento",
      name: "FgRelAcompanhamento",
      typeField: "string",

      allowNull: false,
    },
  ],
};
