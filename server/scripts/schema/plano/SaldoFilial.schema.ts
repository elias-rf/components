import { TTable } from "../../../../types/model";

export const SaldoFilial: TTable = {
  database: "plano",
  table: "SaldoFilial",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
      size: 12,
      allowNull: false,
    },
    {
      field: "DtSaldo",
      label: "DtSaldo",
      name: "DtSaldo",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
