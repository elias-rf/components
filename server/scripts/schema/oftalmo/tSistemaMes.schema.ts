import { TTableDef } from "@/types/model";

export const tSistemaMes: TTableDef = {
  database: "oftalmo",
  table: "tSistemaMes",
  fields: [
    {
      field: "Mes",
      label: "Mes",
      name: "tSistemaMes_id",
      typeField: "date",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DiaInicial",
      label: "DiaInicial",
      name: "DiaInicial",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "DiaFinal",
      label: "DiaFinal",
      name: "DiaFinal",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "DiaInicialCornea",
      label: "DiaInicialCornea",
      name: "DiaInicialCornea",
      typeField: "date",
    },
    {
      field: "DiaFinalCornea",
      label: "DiaFinalCornea",
      name: "DiaFinalCornea",
      typeField: "date",
    },
    {
      field: "QtdDiasMes",
      label: "QtdDiasMes",
      name: "QtdDiasMes",
      typeField: "int",
    },
  ],
};
