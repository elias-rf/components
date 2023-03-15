import { TTable } from "../../../../types/model";

export const Estorno: TTable = {
  database: "plano",
  table: "Estorno",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlBase",
      label: "VlBase",
      name: "VlBase",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
