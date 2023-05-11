import { TTableDef } from "@/types/model";

export const TabMovCTroco: TTableDef = {
  database: "plano",
  table: "TabMovCTroco",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlDinheiro",
      label: "VlDinheiro",
      name: "VlDinheiro",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTroco",
      label: "VlTroco",
      name: "VlTroco",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
