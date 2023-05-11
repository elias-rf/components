import { TTableDef } from "@/types/model";

export const NotaComprovanteRecLocal: TTableDef = {
  database: "plano",
  table: "NotaComprovanteRecLocal",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumNotaAviso",
      label: "NumNotaAviso",
      name: "NumNotaAviso",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieAviso",
      label: "SerieAviso",
      name: "SerieAviso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloAviso",
      label: "ModeloAviso",
      name: "ModeloAviso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
