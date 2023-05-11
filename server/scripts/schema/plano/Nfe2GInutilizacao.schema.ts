import { TTableDef } from "@/types/model";

export const Nfe2GInutilizacao: TTableDef = {
  database: "plano",
  table: "Nfe2GInutilizacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
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
      field: "MotivoInutilizacao",
      label: "MotivoInutilizacao",
      name: "MotivoInutilizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtInutilizacao",
      label: "DtInutilizacao",
      name: "DtInutilizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioInutilizacao",
      label: "UsuarioInutilizacao",
      name: "UsuarioInutilizacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
