import { TTable } from "../../../../types";

export const TabMovCTroco: TTable = {
  database: "plano",
  table: "TabMovCTroco",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "VlDinheiro",
      label: "VlDinheiro",
      name: "VlDinheiro",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTroco",
      label: "VlTroco",
      name: "VlTroco",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
