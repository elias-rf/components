import { TEntity } from "../../../../types";

export const TabelaSelic: TEntity = {
  database: "plano",
  table: "TabelaSelic",
  fields: [
    {
      field: "DtBase",
      label: "DtBase",
      name: "TabelaSelic_id",
      type: "datetime",
      size: 8,
      scale: 3,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PercSelic",
      label: "PercSelic",
      name: "PercSelic",
      type: "float",
      size: 8,
      scale: 4,
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
