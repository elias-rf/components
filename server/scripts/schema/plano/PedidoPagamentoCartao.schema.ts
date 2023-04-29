import { TTableDef } from "@mono/types/model";

export const PedidoPagamentoCartao: TTableDef = {
  database: "plano",
  table: "PedidoPagamentoCartao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 5,
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
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "CdAdministradora",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "VlCartao",
      label: "VlCartao",
      name: "VlCartao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumParcelas",
      label: "NumParcelas",
      name: "NumParcelas",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
