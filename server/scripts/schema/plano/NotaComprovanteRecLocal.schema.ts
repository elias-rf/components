import { TEntity } from "../../../../types";

export const NotaComprovanteRecLocal: TEntity = {
  database: "plano",
  table: "NotaComprovanteRecLocal",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NumNotaAviso",
      label: "NumNotaAviso",
      name: "NumNotaAviso",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "SerieAviso",
      label: "SerieAviso",
      name: "SerieAviso",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ModeloAviso",
      label: "ModeloAviso",
      name: "ModeloAviso",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
