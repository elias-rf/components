import { TTableDef } from "@/types/model";

export const ConfigRemessaLab: TTableDef = {
  database: "plano",
  table: "ConfigRemessaLab",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "IdLayOut",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "CdFabricante",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
