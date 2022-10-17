import { TEntity } from "../../../../types";

export const MedicoAMIVida: TEntity = {
  database: "plano",
  table: "MedicoAMIVida",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "MedicoAMIVida_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgEnvioMaterial",
      label: "FgEnvioMaterial",
      name: "FgEnvioMaterial",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgEnvioBrindes",
      label: "FgEnvioBrindes",
      name: "FgEnvioBrindes",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgRelAcompanhamento",
      label: "FgRelAcompanhamento",
      name: "FgRelAcompanhamento",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
