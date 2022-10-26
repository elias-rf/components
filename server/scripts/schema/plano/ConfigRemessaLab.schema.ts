import { TEntity } from "../../../../types";

export const ConfigRemessaLab: TEntity = {
  database: "plano",
  table: "ConfigRemessaLab",
  schema: [
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
