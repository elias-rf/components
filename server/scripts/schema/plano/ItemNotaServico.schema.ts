import { TEntity } from "@er/types/*";

export const ItemNotaServico: TEntity =
  {
  "database": "plano",
  "table": "ItemNotaServico",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgIRRF",
      "label": "FgIRRF",
      "name": "FgIRRF",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgIN381",
      "label": "FgIN381",
      "name": "FgIN381",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEstoqueServico",
      "label": "FgEstoqueServico",
      "name": "FgEstoqueServico",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CST",
      "label": "CST",
      "name": "CST",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlServico",
      "label": "VlServico",
      "name": "VlServico",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlLiquido",
      "label": "VlLiquido",
      "name": "VlLiquido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDeducoes",
      "label": "VlDeducoes",
      "name": "VlDeducoes",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculo",
      "label": "VlBaseCalculo",
      "name": "VlBaseCalculo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoPIS",
      "label": "VlBaseCalculoPIS",
      "name": "VlBaseCalculoPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaPIS",
      "label": "AliquotaPIS",
      "name": "AliquotaPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlPIS",
      "label": "VlPIS",
      "name": "VlPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoCofins",
      "label": "VlBaseCalculoCofins",
      "name": "VlBaseCalculoCofins",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaCofins",
      "label": "AliquotaCofins",
      "name": "AliquotaCofins",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCofins",
      "label": "VlCofins",
      "name": "VlCofins",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoINSS",
      "label": "VlBaseCalculoINSS",
      "name": "VlBaseCalculoINSS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaINSS",
      "label": "AliquotaINSS",
      "name": "AliquotaINSS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlINSS",
      "label": "VlINSS",
      "name": "VlINSS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoIRRF",
      "label": "VlBaseCalculoIRRF",
      "name": "VlBaseCalculoIRRF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaIRRF",
      "label": "AliquotaIRRF",
      "name": "AliquotaIRRF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIRRF",
      "label": "VlIRRF",
      "name": "VlIRRF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoCSLL",
      "label": "VlBaseCalculoCSLL",
      "name": "VlBaseCalculoCSLL",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaCSLL",
      "label": "AliquotaCSLL",
      "name": "AliquotaCSLL",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCSLL",
      "label": "VlCSLL",
      "name": "VlCSLL",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoIN381",
      "label": "VlBaseCalculoIN381",
      "name": "VlBaseCalculoIN381",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaIN381",
      "label": "AliquotaIN381",
      "name": "AliquotaIN381",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIN381",
      "label": "VlIN381",
      "name": "VlIN381",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgISSRetido",
      "label": "FgISSRetido",
      "name": "FgISSRetido",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "VlISSRetido",
      "label": "VlISSRetido",
      "name": "VlISSRetido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoISS",
      "label": "VlBaseCalculoISS",
      "name": "VlBaseCalculoISS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaISS",
      "label": "AliquotaISS",
      "name": "AliquotaISS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlISS",
      "label": "VlISS",
      "name": "VlISS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlOutrasRetencoes",
      "label": "VlOutrasRetencoes",
      "name": "VlOutrasRetencoes",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescontoIncondicionado",
      "label": "VlDescontoIncondicionado",
      "name": "VlDescontoIncondicionado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescontoCondicionado",
      "label": "VlDescontoCondicionado",
      "name": "VlDescontoCondicionado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CSTPIS",
      "label": "CSTPIS",
      "name": "CSTPIS",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CSTCofins",
      "label": "CSTCofins",
      "name": "CSTCofins",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "VlAproximadoImpostoItem",
      "label": "VlAproximadoImpostoItem",
      "name": "VlAproximadoImpostoItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoFederal",
      "label": "VlAproximadoImpostoFederal",
      "name": "VlAproximadoImpostoFederal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoEstadual",
      "label": "VlAproximadoImpostoEstadual",
      "name": "VlAproximadoImpostoEstadual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoMunicipal",
      "label": "VlAproximadoImpostoMunicipal",
      "name": "VlAproximadoImpostoMunicipal",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
