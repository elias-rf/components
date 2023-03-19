import { TTableDef } from "../../../../types/model";

export const Nfe2GInutilizacao: TTableDef = {
  database: "plano",
  table: "Nfe2GInutilizacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "MotivoInutilizacao",
      label: "MotivoInutilizacao",
      name: "MotivoInutilizacao",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "DtInutilizacao",
      label: "DtInutilizacao",
      name: "DtInutilizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioInutilizacao",
      label: "UsuarioInutilizacao",
      name: "UsuarioInutilizacao",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
