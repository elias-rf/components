import { TTableDef } from "@/types/model";

export const LegendasClasFiscal: TTableDef = {
  database: "plano",
  table: "LegendasClasFiscal",
  fields: [
    {
      field: "ClasFiscal",
      label: "ClasFiscal",
      name: "LegendasClasFiscal_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Legenda",
      label: "Legenda",
      name: "Legenda",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
