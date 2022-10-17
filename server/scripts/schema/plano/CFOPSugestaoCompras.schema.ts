import { TEntity } from "../../../../types";

export const CFOPSugestaoCompras: TEntity = {
  database: "plano",
  table: "CFOPSugestaoCompras",
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
      field: "UFFornecedor",
      label: "UFFornecedor",
      name: "UFFornecedor",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoMercadoria",
      label: "TipoMercadoria",
      name: "TipoMercadoria",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "FgCompoeGNRE",
      label: "FgCompoeGNRE",
      name: "FgCompoeGNRE",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "CFOPXML",
      label: "CFOPXML",
      name: "CFOPXML",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPSugestao",
      label: "CFOPSugestao",
      name: "CFOPSugestao",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
