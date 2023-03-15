import { TTable } from "../../../../types/model";

export const SpedControleCredito: TTable = {
  database: "plano",
  table: "SpedControleCredito",
  fields: [
    {
      field: "Cnpj",
      label: "Cnpj",
      name: "Cnpj",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "PeriodoApuracao",
      label: "PeriodoApuracao",
      name: "PeriodoApuracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "TipoImposto",
      label: "TipoImposto",
      name: "TipoImposto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdCredito",
      label: "CdCredito",
      name: "CdCredito",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlCreditoPeriodo",
      label: "VlCreditoPeriodo",
      name: "VlCreditoPeriodo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDebitoPeriodo",
      label: "VlDebitoPeriodo",
      name: "VlDebitoPeriodo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlResultadoPeriodo",
      label: "VlResultadoPeriodo",
      name: "VlResultadoPeriodo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSaldoCredito",
      label: "VlSaldoCredito",
      name: "VlSaldoCredito",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUtilizadoForaPeriodo",
      label: "VlUtilizadoForaPeriodo",
      name: "VlUtilizadoForaPeriodo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtGeracao",
      label: "DtGeracao",
      name: "DtGeracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
