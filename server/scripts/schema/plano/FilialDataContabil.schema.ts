import { TTableDef } from "@mono/types/model";

export const FilialDataContabil: TTableDef = {
  database: "plano",
  table: "FilialDataContabil",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "FilialDataContabil_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtFechamentoPeriodo",
      label: "DtFechamentoPeriodo",
      name: "DtFechamentoPeriodo",
      typeField: "datetime",
      size: 8,
      scale: 3,
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
