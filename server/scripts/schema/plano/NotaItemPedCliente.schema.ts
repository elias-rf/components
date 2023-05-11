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

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedCliente",
      label: "NumPedCliente",
      name: "NumPedCliente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemPedCliente",
      label: "ItemPedCliente",
      name: "ItemPedCliente",
      typeField: "string",

      allowNull: false,
    },
  ],
};
