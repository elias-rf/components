import { TTable } from "../../../../types/model";

export const CadCliAMIVida: TTable = {
  database: "plano",
  table: "CadCliAMIVida",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAMIVida_id",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "FgTeleAtivo",
      label: "FgTeleAtivo",
      name: "FgTeleAtivo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtUltContato",
      label: "DtUltContato",
      name: "DtUltContato",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 512,
    },
  ],
};
