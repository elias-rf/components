import { TTable } from "../../../../types";

export const MestreBalanco: TTable = {
  database: "plano",
  table: "MestreBalanco",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumBalanco",
      label: "NumBalanco",
      name: "NumBalanco",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtRelatorio",
      label: "DtRelatorio",
      name: "DtRelatorio",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioRelatorio",
      label: "UsuarioRelatorio",
      name: "UsuarioRelatorio",
      type: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioValidacao",
      label: "UsuarioValidacao",
      name: "UsuarioValidacao",
      type: "string",
      size: 20,
      allowNull: false,
    },
  ],
};
