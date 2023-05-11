import { TTableDef } from "@/types/model";

export const SpedControleCredito: TTableDef = {
  database: "plano",
  table: "SpedControleCredito",
  fields: [
    {
      field: "Cnpj",
      label: "Cnpj",
      name: "Cnpj",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PeriodoApuracao",
      label: "PeriodoApuracao",
      name: "PeriodoApuracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "TipoImposto",
      label: "TipoImposto",
      name: "TipoImposto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCredito",
      label: "CdCredito",
      name: "CdCredito",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlCreditoPeriodo",
      label: "VlCreditoPeriodo",
      name: "VlCreditoPeriodo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDebitoPeriodo",
      label: "VlDebitoPeriodo",
      name: "VlDebitoPeriodo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlResultadoPeriodo",
      label: "VlResultadoPeriodo",
      name: "VlResultadoPeriodo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSaldoCredito",
      label: "VlSaldoCredito",
      name: "VlSaldoCredito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUtilizadoForaPeriodo",
      label: "VlUtilizadoForaPeriodo",
      name: "VlUtilizadoForaPeriodo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtGeracao",
      label: "DtGeracao",
      name: "DtGeracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
