import { TTableDef } from "@/types/model";

export const RamoAtividade: TTableDef = {
  database: "plano",
  table: "RamoAtividade",
  fields: [
    {
      field: "CdRamoAtividade",
      label: "CdRamoAtividade",
      name: "RamoAtividade_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmRamoAtividade",
      label: "NmRamoAtividade",
      name: "NmRamoAtividade",
      typeField: "string",
      size: 30,
    },
  ],
};
