import { TTableDef } from "@/types/model";

export const NFCeTempMestre: TTableDef = {
  database: "plano",
  table: "NFCeTempMestre",
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
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtOperacao",
      label: "DtOperacao",
      name: "DtOperacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "IdOperacao",
      label: "IdOperacao",
      name: "IdOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CPFCNPJCliente",
      label: "CPFCNPJCliente",
      name: "CPFCNPJCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EmailCliente",
      label: "EmailCliente",
      name: "EmailCliente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdVendedorExtra",
      label: "CdVendedorExtra",
      name: "CdVendedorExtra",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescGer",
      label: "VlDescGer",
      name: "VlDescGer",
      typeField: "float",

      scale: 4,
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
      field: "CdSetor",
      label: "CdSetor",
      name: "CdSetor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Localizacao",
      label: "Localizacao",
      name: "Localizacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgVendaExterna",
      label: "FgVendaExterna",
      name: "FgVendaExterna",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Fase",
      label: "Fase",
      name: "Fase",
      typeField: "string",
    },
    {
      field: "FgAbatimento",
      label: "FgAbatimento",
      name: "FgAbatimento",
      typeField: "string",
    },
  ],
};
