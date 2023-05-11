import { TTableDef } from "@/types/model";

export const Nfe2GCancelamento: TTableDef = {
  database: "plano",
  table: "Nfe2GCancelamento",
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
      field: "CdMotivoCancelamento",
      label: "CdMotivoCancelamento",
      name: "CdMotivoCancelamento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MotivoCancelamento",
      label: "MotivoCancelamento",
      name: "MotivoCancelamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioCancelamento",
      label: "UsuarioCancelamento",
      name: "UsuarioCancelamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumProtocoloCancelamento",
      label: "NumProtocoloCancelamento",
      name: "NumProtocoloCancelamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtProtocoloCancelamento",
      label: "DtProtocoloCancelamento",
      name: "DtProtocoloCancelamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
