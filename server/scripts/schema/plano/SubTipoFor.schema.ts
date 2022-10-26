import { TEntity } from "../../../../types";

export const SubTipoFor: TEntity = {
  database: "plano",
  table: "SubTipoFor",
  schema: [
    {
      field: "CdSubTipo",
      label: "CdSubTipo",
      name: "SubTipoFor_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSubTipo",
      label: "NmSubTipo",
      name: "NmSubTipo",
      type: "string",
      size: 40,
    },
  ],
};