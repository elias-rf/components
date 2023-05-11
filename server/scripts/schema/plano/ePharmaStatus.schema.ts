import { TTableDef } from "@/types/model";

export const ePharmaStatus: TTableDef = {
  database: "plano",
  table: "ePharmaStatus",
  fields: [
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "ePharmaStatus_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltEncerramento",
      label: "DtUltEncerramento",
      name: "DtUltEncerramento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtInicializacao",
      label: "DtInicializacao",
      name: "DtInicializacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
