import { TTable } from "../../../../types";

export const tSistemaMes: TTable = {
  database: "oftalmo",
  table: "tSistemaMes",
  fields: [
    {
      field: "Mes",
      label: "Mes",
      name: "tSistemaMes_id",
      type: "date",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DiaInicial",
      label: "DiaInicial",
      name: "DiaInicial",
      type: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "DiaFinal",
      label: "DiaFinal",
      name: "DiaFinal",
      type: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "DiaInicialCornea",
      label: "DiaInicialCornea",
      name: "DiaInicialCornea",
      type: "date",
      size: 4,
    },
    {
      field: "DiaFinalCornea",
      label: "DiaFinalCornea",
      name: "DiaFinalCornea",
      type: "date",
      size: 4,
    },
    {
      field: "QtdDiasMes",
      label: "QtdDiasMes",
      name: "QtdDiasMes",
      type: "int",
      size: 4,
    },
  ],
};
