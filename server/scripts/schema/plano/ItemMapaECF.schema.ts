import { TTableDef } from "@/types/model";

export const ItemMapaECF: TTableDef = {
  database: "plano",
  table: "ItemMapaECF",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtMapa",
      label: "DtMapa",
      name: "DtMapa",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroSerie",
      label: "NumeroSerie",
      name: "NumeroSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ContReducaoZ",
      label: "ContReducaoZ",
      name: "ContReducaoZ",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ConReinicioCRO",
      label: "ConReinicioCRO",
      name: "ConReinicioCRO",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumOperacaoInicial",
      label: "NumOperacaoInicial",
      name: "NumOperacaoInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumOperacaoFinal",
      label: "NumOperacaoFinal",
      name: "NumOperacaoFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ConCancelamento",
      label: "ConCancelamento",
      name: "ConCancelamento",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlGTAtual",
      label: "VlGTAtual",
      name: "VlGTAtual",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlGTAnterior",
      label: "VlGTAnterior",
      name: "VlGTAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlVendaBruta",
      label: "VlVendaBruta",
      name: "VlVendaBruta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlVendaLiquida",
      label: "VlVendaLiquida",
      name: "VlVendaLiquida",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalISS",
      label: "VlTotalISS",
      name: "VlTotalISS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCancelamentos",
      label: "VlCancelamentos",
      name: "VlCancelamentos",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontos",
      label: "VlDescontos",
      name: "VlDescontos",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcrescimo",
      label: "VlAcrescimo",
      name: "VlAcrescimo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalcICMS",
      label: "VlBaseCalcICMS",
      name: "VlBaseCalcICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIcms",
      label: "VlIcms",
      name: "VlIcms",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIsentas",
      label: "VlIsentas",
      name: "VlIsentas",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlOutros",
      label: "VlOutros",
      name: "VlOutros",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSubTribComInsidencia",
      label: "VlSubTribComInsidencia",
      name: "VlSubTribComInsidencia",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSubTribSemInsidencia",
      label: "VlSubTribSemInsidencia",
      name: "VlSubTribSemInsidencia",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRecebimentos",
      label: "VlRecebimentos",
      name: "VlRecebimentos",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
