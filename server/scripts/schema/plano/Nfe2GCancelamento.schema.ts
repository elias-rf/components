import { TEntity } from "../../../../types";

export const Nfe2GCancelamento: TEntity = {
  database: "plano",
  table: "Nfe2GCancelamento",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      type: "float",
      size: 8,
      scale: 4,
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
      field: "CdMotivoCancelamento",
      label: "CdMotivoCancelamento",
      name: "CdMotivoCancelamento",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MotivoCancelamento",
      label: "MotivoCancelamento",
      name: "MotivoCancelamento",
      type: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioCancelamento",
      label: "UsuarioCancelamento",
      name: "UsuarioCancelamento",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NumProtocoloCancelamento",
      label: "NumProtocoloCancelamento",
      name: "NumProtocoloCancelamento",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtProtocoloCancelamento",
      label: "DtProtocoloCancelamento",
      name: "DtProtocoloCancelamento",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
