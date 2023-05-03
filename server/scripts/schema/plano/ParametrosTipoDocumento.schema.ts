import { TTableDef } from "@/types/model";

export const ParametrosTipoDocumento: TTableDef = {
  database: "plano",
  table: "ParametrosTipoDocumento",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "TipoDocumento",
      label: "TipoDocumento",
      name: "TipoDocumento",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "PercMulta",
      label: "PercMulta",
      name: "PercMulta",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercJurosDia",
      label: "PercJurosDia",
      name: "PercJurosDia",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "FgCobrancaBancaria",
      label: "FgCobrancaBancaria",
      name: "FgCobrancaBancaria",
      typeField: "string",
      size: 1,
    },
  ],
};
