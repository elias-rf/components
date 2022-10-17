import { TEntity } from "../../../../types";

export const ItemMapaECF: TEntity = {
  database: "plano",
  table: "ItemMapaECF",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtMapa",
      label: "DtMapa",
      name: "DtMapa",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumeroSerie",
      label: "NumeroSerie",
      name: "NumeroSerie",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "ContReducaoZ",
      label: "ContReducaoZ",
      name: "ContReducaoZ",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "ConReinicioCRO",
      label: "ConReinicioCRO",
      name: "ConReinicioCRO",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumOperacaoInicial",
      label: "NumOperacaoInicial",
      name: "NumOperacaoInicial",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumOperacaoFinal",
      label: "NumOperacaoFinal",
      name: "NumOperacaoFinal",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "ConCancelamento",
      label: "ConCancelamento",
      name: "ConCancelamento",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlGTAtual",
      label: "VlGTAtual",
      name: "VlGTAtual",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlGTAnterior",
      label: "VlGTAnterior",
      name: "VlGTAnterior",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlVendaBruta",
      label: "VlVendaBruta",
      name: "VlVendaBruta",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlVendaLiquida",
      label: "VlVendaLiquida",
      name: "VlVendaLiquida",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalISS",
      label: "VlTotalISS",
      name: "VlTotalISS",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCancelamentos",
      label: "VlCancelamentos",
      name: "VlCancelamentos",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontos",
      label: "VlDescontos",
      name: "VlDescontos",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcrescimo",
      label: "VlAcrescimo",
      name: "VlAcrescimo",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalcICMS",
      label: "VlBaseCalcICMS",
      name: "VlBaseCalcICMS",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIcms",
      label: "VlIcms",
      name: "VlIcms",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIsentas",
      label: "VlIsentas",
      name: "VlIsentas",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlOutros",
      label: "VlOutros",
      name: "VlOutros",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSubTribComInsidencia",
      label: "VlSubTribComInsidencia",
      name: "VlSubTribComInsidencia",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSubTribSemInsidencia",
      label: "VlSubTribSemInsidencia",
      name: "VlSubTribSemInsidencia",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRecebimentos",
      label: "VlRecebimentos",
      name: "VlRecebimentos",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
