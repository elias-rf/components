import { TTableDef } from "../../../../types/model";

export const ConfiguracaoEmailCR: TTableDef = {
  database: "plano",
  table: "ConfiguracaoEmailCR",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "ConfiguracaoEmailCR_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgEnvioAutomaticoEmailCR",
      label: "FgEnvioAutomaticoEmailCR",
      name: "FgEnvioAutomaticoEmailCR",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DiasCarenciaEnvioEmailCR",
      label: "DiasCarenciaEnvioEmailCR",
      name: "DiasCarenciaEnvioEmailCR",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "PrazoReEnvioEmailCR",
      label: "PrazoReEnvioEmailCR",
      name: "PrazoReEnvioEmailCR",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtUltimoEnvioEmail",
      label: "DtUltimoEnvioEmail",
      name: "DtUltimoEnvioEmail",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
