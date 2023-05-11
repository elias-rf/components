import { TTableDef } from "@/types/model";

export const PedidoLibFinanceiro: TTableDef = {
  database: "plano",
  table: "PedidoLibFinanceiro",
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
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLiberado",
      label: "VlLiberado",
      name: "VlLiberado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

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
      field: "UsuarioConf",
      label: "UsuarioConf",
      name: "UsuarioConf",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DataConf",
      label: "DataConf",
      name: "DataConf",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
