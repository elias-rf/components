import { TTable } from "../../../../types";

export const ConfiguracaoEmailCR: TTable = {
  database: "plano",
  table: "ConfiguracaoEmailCR",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "ConfiguracaoEmailCR_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgEnvioAutomaticoEmailCR",
      label: "FgEnvioAutomaticoEmailCR",
      name: "FgEnvioAutomaticoEmailCR",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DiasCarenciaEnvioEmailCR",
      label: "DiasCarenciaEnvioEmailCR",
      name: "DiasCarenciaEnvioEmailCR",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "PrazoReEnvioEmailCR",
      label: "PrazoReEnvioEmailCR",
      name: "PrazoReEnvioEmailCR",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtUltimoEnvioEmail",
      label: "DtUltimoEnvioEmail",
      name: "DtUltimoEnvioEmail",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
