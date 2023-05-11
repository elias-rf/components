import { TTableDef } from "@/types/model";

export const ePharmaPedido: TTableDef = {
  database: "plano",
  table: "ePharmaPedido",
  fields: [
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "ePharmaPedido_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtAutorizacao",
      label: "DtAutorizacao",
      name: "DtAutorizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumeroTransacao",
      label: "NumeroTransacao",
      name: "NumeroTransacao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtValidadeAutorizacao",
      label: "DtValidadeAutorizacao",
      name: "DtValidadeAutorizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SaldoCartao",
      label: "SaldoCartao",
      name: "SaldoCartao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtValidadeSaldo",
      label: "DtValidadeSaldo",
      name: "DtValidadeSaldo",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
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
      field: "DtMovimento",
      label: "DtMovimento",
      name: "DtMovimento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtConciliacao",
      label: "DtConciliacao",
      name: "DtConciliacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtPagamento",
      label: "DtPagamento",
      name: "DtPagamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "FgConciliacao",
      label: "FgConciliacao",
      name: "FgConciliacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
