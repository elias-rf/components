import { TTableDef } from "@/types/model";

export const NotaEntradaGNREMestre: TTableDef = {
  database: "plano",
  table: "NotaEntradaGNREMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PercMinimoICMSSub",
      label: "PercMinimoICMSSub",
      name: "PercMinimoICMSSub",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPrincipal",
      label: "VlPrincipal",
      name: "VlPrincipal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAtualizacaoMonetaria",
      label: "VlAtualizacaoMonetaria",
      name: "VlAtualizacaoMonetaria",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlJuros",
      label: "VlJuros",
      name: "VlJuros",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlMulta",
      label: "VlMulta",
      name: "VlMulta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtRecolhimento",
      label: "DtRecolhimento",
      name: "DtRecolhimento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
