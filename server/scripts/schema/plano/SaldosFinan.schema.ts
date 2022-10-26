import { TEntity } from "../../../../types";

export const SaldosFinan: TEntity = {
  database: "plano",
  table: "SaldosFinan",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtReferencia",
      label: "DtReferencia",
      name: "DtReferencia",
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
      field: "VlSaldoAnt",
      label: "VlSaldoAnt",
      name: "VlSaldoAnt",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};
