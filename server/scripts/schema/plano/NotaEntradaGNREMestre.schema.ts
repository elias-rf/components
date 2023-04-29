import { TTableDef } from "@mono/types/model";

export const NotaEntradaGNREMestre: TTableDef = {
  database: "plano",
  table: "NotaEntradaGNREMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "PercMinimoICMSSub",
      label: "PercMinimoICMSSub",
      name: "PercMinimoICMSSub",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPrincipal",
      label: "VlPrincipal",
      name: "VlPrincipal",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAtualizacaoMonetaria",
      label: "VlAtualizacaoMonetaria",
      name: "VlAtualizacaoMonetaria",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlJuros",
      label: "VlJuros",
      name: "VlJuros",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlMulta",
      label: "VlMulta",
      name: "VlMulta",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtRecolhimento",
      label: "DtRecolhimento",
      name: "DtRecolhimento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
