import { TEntity } from "../../../../types";

export const ECFSGT: TEntity = {
  database: "plano",
  table: "ECFSGT",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ECF",
      label: "ECF",
      name: "ECF",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "Identificacao",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "VlGrandeTotal",
      label: "VlGrandeTotal",
      name: "VlGrandeTotal",
      type: "string",
      size: 64,
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
