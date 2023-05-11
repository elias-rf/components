import { TTableDef } from "@/types/model";

export const ECFS: TTableDef = {
  database: "plano",
  table: "ECFS",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ECF",
      label: "ECF",
      name: "ECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "Identificacao",
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
