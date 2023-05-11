import { TTableDef } from "@/types/model";

export const CadCliAMIVida: TTableDef = {
  database: "plano",
  table: "CadCliAMIVida",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAMIVida_id",
      typeField: "float",

      scale: 4,
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
      field: "FgTeleAtivo",
      label: "FgTeleAtivo",
      name: "FgTeleAtivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltContato",
      label: "DtUltContato",
      name: "DtUltContato",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};
