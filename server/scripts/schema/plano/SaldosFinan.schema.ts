import { TTableDef } from "@/types/model";

export const SaldosFinan: TTableDef = {
  database: "plano",
  table: "SaldosFinan",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtReferencia",
      label: "DtReferencia",
      name: "DtReferencia",
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
      field: "VlSaldoAnt",
      label: "VlSaldoAnt",
      name: "VlSaldoAnt",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
