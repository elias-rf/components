import { TTableDef } from "@/types/model";

export const FilialDataContabil: TTableDef = {
  database: "plano",
  table: "FilialDataContabil",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "FilialDataContabil_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtFechamentoPeriodo",
      label: "DtFechamentoPeriodo",
      name: "DtFechamentoPeriodo",
      typeField: "datetime",

      scale: 3,
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
