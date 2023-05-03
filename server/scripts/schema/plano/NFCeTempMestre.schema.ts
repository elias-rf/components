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
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "DtOperacao",
      label: "DtOperacao",
      name: "DtOperacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "IdOperacao",
      label: "IdOperacao",
      name: "IdOperacao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CPFCNPJCliente",
      label: "CPFCNPJCliente",
      name: "CPFCNPJCliente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "EmailCliente",
      label: "EmailCliente",
      name: "EmailCliente",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdVendedorExtra",
      label: "CdVendedorExtra",
      name: "CdVendedorExtra",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescGer",
      label: "VlDescGer",
      name: "VlDescGer",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "CdSetor",
      label: "CdSetor",
      name: "CdSetor",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Localizacao",
      label: "Localizacao",
      name: "Localizacao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "FgVendaExterna",
      label: "FgVendaExterna",
      name: "FgVendaExterna",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Fase",
      label: "Fase",
      name: "Fase",
      typeField: "string",
      size: 16,
    },
    {
      field: "FgAbatimento",
      label: "FgAbatimento",
      name: "FgAbatimento",
      typeField: "string",
      size: 1,
    },
  ],
};
