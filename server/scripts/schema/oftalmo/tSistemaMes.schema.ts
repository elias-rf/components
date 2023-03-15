import { TTable } from "../../../../types/model";

export const tSistemaMes: TTable = {
  database: "oftalmo",
  table: "tSistemaMes",
  fields: [
    {
      field: "Mes",
      label: "Mes",
      name: "tSistemaMes_id",
      typeField: "date",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DiaInicial",
      label: "DiaInicial",
      name: "DiaInicial",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "DiaFinal",
      label: "DiaFinal",
      name: "DiaFinal",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "DiaInicialCornea",
      label: "DiaInicialCornea",
      name: "DiaInicialCornea",
      typeField: "date",
      size: 4,
    },
    {
      field: "DiaFinalCornea",
      label: "DiaFinalCornea",
      name: "DiaFinalCornea",
      typeField: "date",
      size: 4,
    },
    {
      field: "QtdDiasMes",
      label: "QtdDiasMes",
      name: "QtdDiasMes",
      typeField: "int",
      size: 4,
    },
  ],
};
