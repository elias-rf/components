import { TEntity } from "../../../../types";

export const Estorno: TEntity = {
  database: "plano",
  table: "Estorno",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlBase",
      label: "VlBase",
      name: "VlBase",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};
