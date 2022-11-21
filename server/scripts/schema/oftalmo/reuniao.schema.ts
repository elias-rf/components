import { TTable } from "../../../../types";

export const reuniao: TTable = {
  database: "oftalmo",
  table: "reuniao",
  fields: [
    {
      field: "id",
      label: "id",
      name: "reuniao_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "solicitante",
      label: "solicitante",
      name: "solicitante",
      type: "string",
      size: 255,
    },
    {
      field: "data",
      label: "data",
      name: "data",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "inicio",
      label: "inicio",
      name: "inicio",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "fim",
      label: "fim",
      name: "fim",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "participantes",
      label: "participantes",
      name: "participantes",
      type: "int",
      size: 4,
    },
    {
      field: "cafe",
      label: "cafe",
      name: "cafe",
      type: "int",
      size: 1,
    },
  ],
};
