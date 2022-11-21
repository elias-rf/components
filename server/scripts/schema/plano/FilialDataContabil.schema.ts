import { TTable } from "../../../../types";

export const FilialDataContabil: TTable = {
  database: "plano",
  table: "FilialDataContabil",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "FilialDataContabil_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtFechamentoPeriodo",
      label: "DtFechamentoPeriodo",
      name: "DtFechamentoPeriodo",
      type: "datetime",
      size: 8,
      scale: 3,
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
