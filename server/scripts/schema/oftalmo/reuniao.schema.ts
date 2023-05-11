import { TTableDef } from "@/types/model";

export const reuniao: TTableDef = {
  database: "oftalmo",
  table: "reuniao",
  fields: [
    {
      field: "id",
      label: "id",
      name: "reuniao_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "solicitante",
      label: "solicitante",
      name: "solicitante",
      typeField: "string",
    },
    {
      field: "data",
      label: "data",
      name: "data",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "inicio",
      label: "inicio",
      name: "inicio",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "fim",
      label: "fim",
      name: "fim",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "participantes",
      label: "participantes",
      name: "participantes",
      typeField: "int",
    },
    {
      field: "cafe",
      label: "cafe",
      name: "cafe",
      typeField: "int",
    },
  ],
};
