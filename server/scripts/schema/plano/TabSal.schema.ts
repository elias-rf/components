import { TEntity } from "../../../../types";

export const TabSal: TEntity = {
  database: "plano",
  table: "TabSal",
  schema: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      type: "string",
      size: 12,
      allowNull: false,
    },
    {
      field: "DtSaldo",
      label: "DtSaldo",
      name: "DtSaldo",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlSaldo",
      label: "VlSaldo",
      name: "VlSaldo",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgSaldoFixado",
      label: "FgSaldoFixado",
      name: "FgSaldoFixado",
      type: "string",
      size: 1,
    },
  ],
};
