import { TTableDef } from "@/types/model";

export const ControladosPedido: TTableDef = {
  database: "plano",
  table: "ControladosPedido",
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
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdePrescrita",
      label: "QtdePrescrita",
      name: "QtdePrescrita",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeVendida",
      label: "QtdeVendida",
      name: "QtdeVendida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtReceita",
      label: "DtReceita",
      name: "DtReceita",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NumReceita",
      label: "NumReceita",
      name: "NumReceita",
      typeField: "int",
    },
    {
      field: "CdComprador",
      label: "CdComprador",
      name: "CdComprador",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NomeComprador",
      label: "NomeComprador",
      name: "NomeComprador",
      typeField: "string",
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
    },
    {
      field: "NumIdentidade",
      label: "NumIdentidade",
      name: "NumIdentidade",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "TipoReceita",
      label: "TipoReceita",
      name: "TipoReceita",
      typeField: "string",
    },
  ],
};
