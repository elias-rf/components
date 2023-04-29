import { TTableDef } from "@mono/types/model";

export const TabelaSelic: TTableDef = {
  database: "plano",
  table: "TabelaSelic",
  fields: [
    {
      field: "DtBase",
      label: "DtBase",
      name: "TabelaSelic_id",
      typeField: "datetime",
      size: 8,
      scale: 3,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PercSelic",
      label: "PercSelic",
      name: "PercSelic",
      typeField: "float",
      size: 8,
      scale: 4,
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
