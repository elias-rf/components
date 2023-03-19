import { TTableDef } from "../../../../types/model";

export const ContasReceberChequeDeposito: TTableDef = {
  database: "plano",
  table: "ContasReceberChequeDeposito",
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
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SiglaDocumento",
      label: "SiglaDocumento",
      name: "SiglaDocumento",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ItemDocumento",
      label: "ItemDocumento",
      name: "ItemDocumento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdBancoDeposito",
      label: "CdBancoDeposito",
      name: "CdBancoDeposito",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdAgenciaDeposito",
      label: "CdAgenciaDeposito",
      name: "CdAgenciaDeposito",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumContaDeposito",
      label: "NumContaDeposito",
      name: "NumContaDeposito",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NumLancamentoDeposito",
      label: "NumLancamentoDeposito",
      name: "NumLancamentoDeposito",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
