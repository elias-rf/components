import { TTableDef } from "@/types/model";

export const TabSal: TTableDef = {
  database: "plano",
  table: "TabSal",
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
      field: "VlSaldo",
      label: "VlSaldo",
      name: "VlSaldo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgSaldoFixado",
      label: "FgSaldoFixado",
      name: "FgSaldoFixado",
      typeField: "string",
    },
  ],
};
