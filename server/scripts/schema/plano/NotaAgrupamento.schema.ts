import { TTableDef } from "@/types/model";

export const NotaAgrupamento: TTableDef = {
  database: "plano",
  table: "NotaAgrupamento",
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
      field: "NumNotaAgrupada",
      label: "NumNotaAgrupada",
      name: "NumNotaAgrupada",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieNotaAgrupada",
      label: "SerieNotaAgrupada",
      name: "SerieNotaAgrupada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloNotaAgrupada",
      label: "ModeloNotaAgrupada",
      name: "ModeloNotaAgrupada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumAgrupamento",
      label: "NumAgrupamento",
      name: "NumAgrupamento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumNotaAgrupamento",
      label: "NumNotaAgrupamento",
      name: "NumNotaAgrupamento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieNotaAgrupamento",
      label: "SerieNotaAgrupamento",
      name: "SerieNotaAgrupamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloNotaAgrupamento",
      label: "ModeloNotaAgrupamento",
      name: "ModeloNotaAgrupamento",
      typeField: "string",

      allowNull: false,
    },
  ],
};
