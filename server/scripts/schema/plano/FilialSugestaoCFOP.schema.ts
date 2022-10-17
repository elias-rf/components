import { TEntity } from "../../../../types";

export const FilialSugestaoCFOP: TEntity = {
  database: "plano",
  table: "FilialSugestaoCFOP",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CFOPEstadualEntrada",
      label: "CFOPEstadualEntrada",
      name: "CFOPEstadualEntrada",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPEstadualSaida",
      label: "CFOPEstadualSaida",
      name: "CFOPEstadualSaida",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPInterEstadualEntrada",
      label: "CFOPInterEstadualEntrada",
      name: "CFOPInterEstadualEntrada",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPInterEstadualSaida",
      label: "CFOPInterEstadualSaida",
      name: "CFOPInterEstadualSaida",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
