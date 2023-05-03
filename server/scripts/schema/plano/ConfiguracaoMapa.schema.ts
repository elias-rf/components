import { TTableDef } from "@/types/model";

export const ConfiguracaoMapa: TTableDef = {
  database: "plano",
  table: "ConfiguracaoMapa",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoMapa_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltimoMapa",
      label: "DtUltimoMapa",
      name: "DtUltimoMapa",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
