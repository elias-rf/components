import { TTableDef } from "@/types/model";

export const PagamentoPedido: TTableDef = {
  database: "plano",
  table: "PagamentoPedido",
  fields: [
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
    },
    {
      field: "CdClienteAssociado",
      label: "CdClienteAssociado",
      name: "CdClienteAssociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtVencimento",
      label: "DtVencimento",
      name: "DtVencimento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmCartao",
      label: "NmCartao",
      name: "NmCartao",
      typeField: "string",
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "int",
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ParcelasCartao",
      label: "ParcelasCartao",
      name: "ParcelasCartao",
      typeField: "int",
    },
    {
      field: "Prazo",
      label: "Prazo",
      name: "Prazo",
      typeField: "int",
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Taxa",
      label: "Taxa",
      name: "Taxa",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCorrecao",
      label: "VlCorrecao",
      name: "VlCorrecao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPrincipal",
      label: "VlPrincipal",
      name: "VlPrincipal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NmFuncionario",
      label: "NmFuncionario",
      name: "NmFuncionario",
      typeField: "string",
    },
    {
      field: "CdCondPagto",
      label: "CdCondPagto",
      name: "CdCondPagto",
      typeField: "int",
    },
    {
      field: "FgCobrancaBancaria",
      label: "FgCobrancaBancaria",
      name: "FgCobrancaBancaria",
      typeField: "string",
    },
  ],
};
