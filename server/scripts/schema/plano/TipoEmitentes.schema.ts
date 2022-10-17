import { TEntity } from "../../../../types";

export const TipoEmitentes: TEntity = {
  database: "plano",
  table: "TipoEmitentes",
  fields: [
    {
      field: "CdTipoEmitente",
      label: "CdTipoEmitente",
      name: "TipoEmitentes_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmTipoEmitente",
      label: "NmTipoEmitente",
      name: "NmTipoEmitente",
      type: "string",
      size: 40,
    },
  ],
};
