import { TTableDef } from "@/types/model";

export const TipoEmitentes: TTableDef = {
  database: "plano",
  table: "TipoEmitentes",
  fields: [
    {
      field: "CdTipoEmitente",
      label: "CdTipoEmitente",
      name: "TipoEmitentes_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTipoEmitente",
      label: "NmTipoEmitente",
      name: "NmTipoEmitente",
      typeField: "string",
    },
  ],
};
