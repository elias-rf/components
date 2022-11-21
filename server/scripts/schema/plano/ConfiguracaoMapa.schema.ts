import { TTable } from "../../../../types";

export const ConfiguracaoMapa: TTable = {
  database: "plano",
  table: "ConfiguracaoMapa",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoMapa_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltimoMapa",
      label: "DtUltimoMapa",
      name: "DtUltimoMapa",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
