import { TTableDef } from "@/types/model";

export const SaldoFilial: TTableDef = {
  database: "plano",
  table: "SaldoFilial",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtSaldo",
      label: "DtSaldo",
      name: "DtSaldo",
      typeField: "datetime",

      scale: 3,
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
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",

      scale: 4,
    },
  ],
};
