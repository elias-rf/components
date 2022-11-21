import { TTable } from "../../../../types";

export const LegendasClasFiscal: TTable = {
  database: "plano",
  table: "LegendasClasFiscal",
  fields: [
    {
      field: "ClasFiscal",
      label: "ClasFiscal",
      name: "LegendasClasFiscal_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Legenda",
      label: "Legenda",
      name: "Legenda",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
