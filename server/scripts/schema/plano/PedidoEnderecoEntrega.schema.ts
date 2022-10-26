import { TEntity } from "../../../../types";

export const PedidoEnderecoEntrega: TEntity = {
  database: "plano",
  table: "PedidoEnderecoEntrega",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdEnderecoEntrega",
      label: "CdEnderecoEntrega",
      name: "CdEnderecoEntrega",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Logradouro",
      label: "Logradouro",
      name: "Logradouro",
      type: "string",
      size: 80,
      allowNull: false,
    },
    {
      field: "Numero",
      label: "Numero",
      name: "Numero",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      type: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "Proximidades",
      label: "Proximidades",
      name: "Proximidades",
      type: "string",
      size: 80,
      allowNull: false,
    },
    {
      field: "ContatoEntrega",
      label: "ContatoEntrega",
      name: "ContatoEntrega",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
