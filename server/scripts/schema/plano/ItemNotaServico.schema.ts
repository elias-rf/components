import { TTableDef } from "@/types/model";

export const ItemNotaServico: TTableDef = {
  database: "plano",
  table: "ItemNotaServico",
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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgIRRF",
      label: "FgIRRF",
      name: "FgIRRF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgIN381",
      label: "FgIN381",
      name: "FgIN381",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEstoqueServico",
      label: "FgEstoqueServico",
      name: "FgEstoqueServico",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CST",
      label: "CST",
      name: "CST",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlServico",
      label: "VlServico",
      name: "VlServico",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDeducoes",
      label: "VlDeducoes",
      name: "VlDeducoes",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculo",
      label: "VlBaseCalculo",
      name: "VlBaseCalculo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoCofins",
      label: "VlBaseCalculoCofins",
      name: "VlBaseCalculoCofins",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCofins",
      label: "AliquotaCofins",
      name: "AliquotaCofins",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoINSS",
      label: "VlBaseCalculoINSS",
      name: "VlBaseCalculoINSS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaINSS",
      label: "AliquotaINSS",
      name: "AliquotaINSS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlINSS",
      label: "VlINSS",
      name: "VlINSS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIRRF",
      label: "VlBaseCalculoIRRF",
      name: "VlBaseCalculoIRRF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaIRRF",
      label: "AliquotaIRRF",
      name: "AliquotaIRRF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIRRF",
      label: "VlIRRF",
      name: "VlIRRF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoCSLL",
      label: "VlBaseCalculoCSLL",
      name: "VlBaseCalculoCSLL",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCSLL",
      label: "AliquotaCSLL",
      name: "AliquotaCSLL",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCSLL",
      label: "VlCSLL",
      name: "VlCSLL",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIN381",
      label: "VlBaseCalculoIN381",
      name: "VlBaseCalculoIN381",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaIN381",
      label: "AliquotaIN381",
      name: "AliquotaIN381",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIN381",
      label: "VlIN381",
      name: "VlIN381",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgISSRetido",
      label: "FgISSRetido",
      name: "FgISSRetido",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlISSRetido",
      label: "VlISSRetido",
      name: "VlISSRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoISS",
      label: "VlBaseCalculoISS",
      name: "VlBaseCalculoISS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaISS",
      label: "AliquotaISS",
      name: "AliquotaISS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlISS",
      label: "VlISS",
      name: "VlISS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlOutrasRetencoes",
      label: "VlOutrasRetencoes",
      name: "VlOutrasRetencoes",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontoIncondicionado",
      label: "VlDescontoIncondicionado",
      name: "VlDescontoIncondicionado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontoCondicionado",
      label: "VlDescontoCondicionado",
      name: "VlDescontoCondicionado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CSTPIS",
      label: "CSTPIS",
      name: "CSTPIS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CSTCofins",
      label: "CSTCofins",
      name: "CSTCofins",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlAproximadoImpostoItem",
      label: "VlAproximadoImpostoItem",
      name: "VlAproximadoImpostoItem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoFederal",
      label: "VlAproximadoImpostoFederal",
      name: "VlAproximadoImpostoFederal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoEstadual",
      label: "VlAproximadoImpostoEstadual",
      name: "VlAproximadoImpostoEstadual",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoMunicipal",
      label: "VlAproximadoImpostoMunicipal",
      name: "VlAproximadoImpostoMunicipal",
      typeField: "float",

      scale: 4,
    },
  ],
};
