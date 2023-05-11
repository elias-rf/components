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

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UFFornecedor",
      label: "UFFornecedor",
      name: "UFFornecedor",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoMercadoria",
      label: "TipoMercadoria",
      name: "TipoMercadoria",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgCompoeGNRE",
      label: "FgCompoeGNRE",
      name: "FgCompoeGNRE",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CFOPXML",
      label: "CFOPXML",
      name: "CFOPXML",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CFOPSugestao",
      label: "CFOPSugestao",
      name: "CFOPSugestao",
      typeField: "int",

      allowNull: false,
    },
  ],
};
