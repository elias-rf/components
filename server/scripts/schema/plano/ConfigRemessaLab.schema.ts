import { TTable } from "../../../../types";

export const ConfigRemessaLab: TTable = {
  database: "plano",
  table: "ConfigRemessaLab",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "IdLayOut",
      type: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "CdFabricante",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
