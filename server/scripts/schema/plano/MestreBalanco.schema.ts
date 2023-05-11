import { TTableDef } from "@/types/model";

export const MestreBalanco: TTableDef = {
  database: "plano",
  table: "MestreBalanco",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumBalanco",
      label: "NumBalanco",
      name: "NumBalanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtRelatorio",
      label: "DtRelatorio",
      name: "DtRelatorio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioRelatorio",
      label: "UsuarioRelatorio",
      name: "UsuarioRelatorio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioValidacao",
      label: "UsuarioValidacao",
      name: "UsuarioValidacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
