import { TTableDef } from "@mono/types/model";

export const tAuditoria: TTableDef = {
  database: "oftalmo",
  table: "tAuditoria",
  fields: [
    {
      field: "id",
      label: "id",
      name: "tAuditoria_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "estacao",
      label: "estacao",
      name: "estacao",
      typeField: "string",
      size: 50,
    },
    {
      field: "data",
      label: "data",
      name: "data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      defaultValue: "getdate()",
    },
    {
      field: "hora",
      label: "hora",
      name: "hora",
      typeField: "datetime",
      size: 8,
      scale: 3,
      defaultValue: "getdate()",
    },
    {
      field: "usuario",
      label: "usuario",
      name: "usuario",
      typeField: "string",
      size: 50,
    },
    {
      field: "operacao",
      label: "operacao",
      name: "operacao",
      typeField: "string",
      size: 200,
    },
  ],
};
