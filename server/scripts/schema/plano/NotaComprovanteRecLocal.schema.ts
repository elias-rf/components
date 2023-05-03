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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NumNotaAviso",
      label: "NumNotaAviso",
      name: "NumNotaAviso",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "SerieAviso",
      label: "SerieAviso",
      name: "SerieAviso",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ModeloAviso",
      label: "ModeloAviso",
      name: "ModeloAviso",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
