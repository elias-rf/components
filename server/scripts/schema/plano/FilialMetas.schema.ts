import { TTable } from "../../../../types/model";

export const FilialMetas: TTable = {
  database: "plano",
  table: "FilialMetas",
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
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlMeta",
      label: "VlMeta",
      name: "VlMeta",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
