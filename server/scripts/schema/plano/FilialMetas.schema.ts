import { TTableDef } from "@/types/model";

export const FilialMetas: TTableDef = {
  database: "plano",
  table: "FilialMetas",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlMeta",
      label: "VlMeta",
      name: "VlMeta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
