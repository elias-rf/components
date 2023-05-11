import { TTableDef } from "@/types/model";

export const PedidoPagamentoCartao: TTableDef = {
  database: "plano",
  table: "PedidoPagamentoCartao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

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
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "CdAdministradora",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlCartao",
      label: "VlCartao",
      name: "VlCartao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumParcelas",
      label: "NumParcelas",
      name: "NumParcelas",
      typeField: "int",

      allowNull: false,
    },
  ],
};
