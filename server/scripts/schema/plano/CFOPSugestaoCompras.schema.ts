import { TTableDef } from "@/types/model";

export const CFOPSugestaoCompras: TTableDef = {
  database: "plano",
  table: "CFOPSugestaoCompras",
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
      field: "UFFornecedor",
      label: "UFFornecedor",
      name: "UFFornecedor",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoMercadoria",
      label: "TipoMercadoria",
      name: "TipoMercadoria",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "FgCompoeGNRE",
      label: "FgCompoeGNRE",
      name: "FgCompoeGNRE",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "CFOPXML",
      label: "CFOPXML",
      name: "CFOPXML",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPSugestao",
      label: "CFOPSugestao",
      name: "CFOPSugestao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
