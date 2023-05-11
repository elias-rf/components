import { TTableDef } from "@/types/model";

export const ConfiguracaoEmailCR: TTableDef = {
  database: "plano",
  table: "ConfiguracaoEmailCR",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "ConfiguracaoEmailCR_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgEnvioAutomaticoEmailCR",
      label: "FgEnvioAutomaticoEmailCR",
      name: "FgEnvioAutomaticoEmailCR",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DiasCarenciaEnvioEmailCR",
      label: "DiasCarenciaEnvioEmailCR",
      name: "DiasCarenciaEnvioEmailCR",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PrazoReEnvioEmailCR",
      label: "PrazoReEnvioEmailCR",
      name: "PrazoReEnvioEmailCR",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtUltimoEnvioEmail",
      label: "DtUltimoEnvioEmail",
      name: "DtUltimoEnvioEmail",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
