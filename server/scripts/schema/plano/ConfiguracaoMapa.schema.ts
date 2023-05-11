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

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltimoMapa",
      label: "DtUltimoMapa",
      name: "DtUltimoMapa",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
