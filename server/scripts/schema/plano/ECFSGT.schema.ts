import { TTable } from "../../../../types/model";

export const ECFSGT: TTable = {
  database: "plano",
  table: "ECFSGT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ECF",
      label: "ECF",
      name: "ECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "Identificacao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "VlGrandeTotal",
      label: "VlGrandeTotal",
      name: "VlGrandeTotal",
      typeField: "string",
      size: 64,
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
