import { TTableDef } from "../../../../types/model";

export const MedicoAMIVida: TTableDef = {
  database: "plano",
  table: "MedicoAMIVida",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "MedicoAMIVida_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgEnvioMaterial",
      label: "FgEnvioMaterial",
      name: "FgEnvioMaterial",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgEnvioBrindes",
      label: "FgEnvioBrindes",
      name: "FgEnvioBrindes",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgRelAcompanhamento",
      label: "FgRelAcompanhamento",
      name: "FgRelAcompanhamento",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
