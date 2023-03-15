import { TTable } from "../../../../types/model";

export const ePharmaStatus: TTable = {
  database: "plano",
  table: "ePharmaStatus",
  fields: [
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "ePharmaStatus_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltEncerramento",
      label: "DtUltEncerramento",
      name: "DtUltEncerramento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtInicializacao",
      label: "DtInicializacao",
      name: "DtInicializacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
