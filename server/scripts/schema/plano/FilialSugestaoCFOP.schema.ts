import { TTableDef } from "@/types/model";

export const FilialSugestaoCFOP: TTableDef = {
  database: "plano",
  table: "FilialSugestaoCFOP",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CFOPEstadualEntrada",
      label: "CFOPEstadualEntrada",
      name: "CFOPEstadualEntrada",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPEstadualSaida",
      label: "CFOPEstadualSaida",
      name: "CFOPEstadualSaida",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPInterEstadualEntrada",
      label: "CFOPInterEstadualEntrada",
      name: "CFOPInterEstadualEntrada",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPInterEstadualSaida",
      label: "CFOPInterEstadualSaida",
      name: "CFOPInterEstadualSaida",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
