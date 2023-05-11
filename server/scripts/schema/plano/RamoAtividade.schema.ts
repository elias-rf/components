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

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmRamoAtividade",
      label: "NmRamoAtividade",
      name: "NmRamoAtividade",
      typeField: "string",
    },
  ],
};
