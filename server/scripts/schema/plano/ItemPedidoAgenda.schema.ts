import { TTableDef } from "@/types/model";

export const ItemPedidoAgenda: TTableDef = {
  database: "plano",
  table: "ItemPedidoAgenda",
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
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MedidaDoses",
      label: "MedidaDoses",
      name: "MedidaDoses",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumDosesDia",
      label: "NumDosesDia",
      name: "NumDosesDia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtIniTratamento",
      label: "DtIniTratamento",
      name: "DtIniTratamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtProcessamento",
      label: "DtProcessamento",
      name: "DtProcessamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltContato",
      label: "DtUltContato",
      name: "DtUltContato",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtProxContato",
      label: "DtProxContato",
      name: "DtProxContato",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
