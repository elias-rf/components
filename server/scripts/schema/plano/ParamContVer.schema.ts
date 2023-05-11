import { TTableDef } from "@/types/model";

export const ParamContVer: TTableDef = {
  database: "plano",
  table: "ParamContVer",
  fields: [
    {
      field: "Ver01",
      label: "Ver01",
      name: "Ver01",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Ver02",
      label: "Ver02",
      name: "Ver02",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Ver03",
      label: "Ver03",
      name: "Ver03",
      typeField: "string",

      allowNull: false,
    },
  ],
};
