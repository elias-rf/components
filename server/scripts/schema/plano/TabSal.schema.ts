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
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
      size: 2,
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
      field: "VlSaldo",
      label: "VlSaldo",
      name: "VlSaldo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgSaldoFixado",
      label: "FgSaldoFixado",
      name: "FgSaldoFixado",
      typeField: "string",
      size: 1,
    },
  ],
};
