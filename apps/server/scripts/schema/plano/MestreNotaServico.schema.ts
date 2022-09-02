import { TEntity } from "@er/types/*";

export const MestreNotaServico: TEntity =
  {
  "database": "plano",
  "table": "MestreNotaServico",
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
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NaturezaOperacao",
      "label": "NaturezaOperacao",
      "name": "NaturezaOperacao",
      "type": "int",
      "size": 4,
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
      "field": "VlBaseCalculoIR",
      "label": "VlBaseCalculoIR",
      "name": "VlBaseCalculoIR",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliquotaIR",
      "label": "AliquotaIR",
      "name": "AliquotaIR",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlIR",
      "label": "VlIR",
      "name": "VlIR",
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
      "field": "AliquotaINS381",
      "label": "AliquotaINS381",
      "name": "AliquotaINS381",
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
      "field": "VlTotalServicos",
      "label": "VlTotalServicos",
      "name": "VlTotalServicos",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotalLiquidoServicos",
      "label": "VlTotalLiquidoServicos",
      "name": "VlTotalLiquidoServicos",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
