import { TTableDef } from "@mono/types/model";

export const Nfe2GCancelamento: TTableDef = {
  database: "plano",
  table: "Nfe2GCancelamento",
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
      field: "CdMotivoCancelamento",
      label: "CdMotivoCancelamento",
      name: "CdMotivoCancelamento",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MotivoCancelamento",
      label: "MotivoCancelamento",
      name: "MotivoCancelamento",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioCancelamento",
      label: "UsuarioCancelamento",
      name: "UsuarioCancelamento",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NumProtocoloCancelamento",
      label: "NumProtocoloCancelamento",
      name: "NumProtocoloCancelamento",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtProtocoloCancelamento",
      label: "DtProtocoloCancelamento",
      name: "DtProtocoloCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
