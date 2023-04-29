import { TTableDef } from "@mono/types/model";

export const LegendasClasFiscal: TTableDef = {
  database: "plano",
  table: "LegendasClasFiscal",
  fields: [
    {
      field: "ClasFiscal",
      label: "ClasFiscal",
      name: "LegendasClasFiscal_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Legenda",
      label: "Legenda",
      name: "Legenda",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
