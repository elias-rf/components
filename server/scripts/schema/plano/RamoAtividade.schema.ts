import { TEntity } from "../../../../types";

export const RamoAtividade: TEntity = {
  database: "plano",
  table: "RamoAtividade",
  fields: [
    {
      field: "CdRamoAtividade",
      label: "CdRamoAtividade",
      name: "RamoAtividade_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmRamoAtividade",
      label: "NmRamoAtividade",
      name: "NmRamoAtividade",
      type: "string",
      size: 30,
    },
  ],
};
