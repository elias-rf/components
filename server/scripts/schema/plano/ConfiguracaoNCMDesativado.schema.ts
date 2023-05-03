import { TTableDef } from "@/types/model";

export const ConfiguracaoNCMDesativado: TTableDef = {
  database: "plano",
  table: "ConfiguracaoNCMDesativado",
  fields: [
    {
      field: "NMC",
      label: "NMC",
      name: "ConfiguracaoNCMDesativado_id",
      typeField: "string",
      size: 8,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
