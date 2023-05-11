import { TTableDef } from "@/types/model";

export const tAuditoria: TTableDef = {
  database: "oftalmo",
  table: "tAuditoria",
  fields: [
    {
      field: "id",
      label: "id",
      name: "tAuditoria_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "estacao",
      label: "estacao",
      name: "estacao",
      typeField: "string",
    },
    {
      field: "data",
      label: "data",
      name: "data",
      typeField: "datetime",

      scale: 3,
      defaultValue: "getdate()",
    },
    {
      field: "hora",
      label: "hora",
      name: "hora",
      typeField: "datetime",

      scale: 3,
      defaultValue: "getdate()",
    },
    {
      field: "usuario",
      label: "usuario",
      name: "usuario",
      typeField: "string",
    },
    {
      field: "operacao",
      label: "operacao",
      name: "operacao",
      typeField: "string",
    },
  ],
};
