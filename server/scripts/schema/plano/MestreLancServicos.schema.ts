import { TEntity } from "@er/types/*";

export const MestreLancServicos: TEntity =
  {
  "database": "plano",
  "table": "MestreLancServicos",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4,
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
      "field": "SubSerie",
      "label": "SubSerie",
      "name": "SubSerie",
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "int",
      "size": 9,
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
      "field": "DtEntrada",
      "label": "DtEntrada",
      "name": "DtEntrada",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlDocumento",
      "label": "VlDocumento",
      "name": "VlDocumento",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "VlTerceiros",
      "label": "VlTerceiros",
      "name": "VlTerceiros",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDespesas",
      "label": "VlDespesas",
      "name": "VlDespesas",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMS",
      "label": "VlICMS",
      "name": "VlICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMSST",
      "label": "VlBaseCalculoICMSST",
      "name": "VlBaseCalculoICMSST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSST",
      "label": "VlICMSST",
      "name": "VlICMSST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlNaoTributado",
      "label": "VlNaoTributado",
      "name": "VlNaoTributado",
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
      "field": "VlCOFINS",
      "label": "VlCOFINS",
      "name": "VlCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdLigacao",
      "label": "CdLigacao",
      "name": "CdLigacao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdTensao",
      "label": "CdTensao",
      "name": "CdTensao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "SituacaoDoc",
      "label": "SituacaoDoc",
      "name": "SituacaoDoc",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoServico",
      "label": "TipoServico",
      "name": "TipoServico",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdClasse",
      "label": "CdClasse",
      "name": "CdClasse",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdAssinante",
      "label": "CdAssinante",
      "name": "CdAssinante",
      "type": "int",
      "size": 2,
      "allowNull": false
    }
  ]
}
