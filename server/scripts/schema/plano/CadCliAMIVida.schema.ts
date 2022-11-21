import { TTable } from "../../../../types";

export const CadCliAMIVida: TTable = {
  database: "plano",
  table: "CadCliAMIVida",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAMIVida_id",
      type: "float",
      size: 8,
      scale: 4,
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
      field: "FgTeleAtivo",
      label: "FgTeleAtivo",
      name: "FgTeleAtivo",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtUltContato",
      label: "DtUltContato",
      name: "DtUltContato",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 512,
    },
  ],
};
