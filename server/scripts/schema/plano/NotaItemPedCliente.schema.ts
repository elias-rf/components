import { TTableDef } from "@/types/model";

export const NotaItemPedCliente: TTableDef = {
  database: "plano",
  table: "NotaItemPedCliente",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumPedCliente",
      label: "NumPedCliente",
      name: "NumPedCliente",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "ItemPedCliente",
      label: "ItemPedCliente",
      name: "ItemPedCliente",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
