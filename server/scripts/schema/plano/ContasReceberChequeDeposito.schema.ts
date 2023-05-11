import { TTableDef } from "@/types/model";

export const ContasReceberChequeDeposito: TTableDef = {
  database: "plano",
  table: "ContasReceberChequeDeposito",
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
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",

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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SiglaDocumento",
      label: "SiglaDocumento",
      name: "SiglaDocumento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemDocumento",
      label: "ItemDocumento",
      name: "ItemDocumento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdBancoDeposito",
      label: "CdBancoDeposito",
      name: "CdBancoDeposito",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgenciaDeposito",
      label: "CdAgenciaDeposito",
      name: "CdAgenciaDeposito",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumContaDeposito",
      label: "NumContaDeposito",
      name: "NumContaDeposito",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumLancamentoDeposito",
      label: "NumLancamentoDeposito",
      name: "NumLancamentoDeposito",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
