import { TTableDef } from "@mono/types/model";

export const reuniao: TTableDef = {
  database: "oftalmo",
  table: "reuniao",
  fields: [
    {
      field: "id",
      label: "id",
      name: "reuniao_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "solicitante",
      label: "solicitante",
      name: "solicitante",
      typeField: "string",
      size: 255,
    },
    {
      field: "data",
      label: "data",
      name: "data",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "inicio",
      label: "inicio",
      name: "inicio",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "fim",
      label: "fim",
      name: "fim",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "participantes",
      label: "participantes",
      name: "participantes",
      typeField: "int",
      size: 4,
    },
    {
      field: "cafe",
      label: "cafe",
      name: "cafe",
      typeField: "int",
      size: 1,
    },
  ],
};
