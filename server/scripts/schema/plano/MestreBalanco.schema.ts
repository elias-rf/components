import { TTableDef } from "../../../../types/model";

export const MestreBalanco: TTableDef = {
  database: "plano",
  table: "MestreBalanco",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumBalanco",
      label: "NumBalanco",
      name: "NumBalanco",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtRelatorio",
      label: "DtRelatorio",
      name: "DtRelatorio",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioRelatorio",
      label: "UsuarioRelatorio",
      name: "UsuarioRelatorio",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioValidacao",
      label: "UsuarioValidacao",
      name: "UsuarioValidacao",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
  ],
};
