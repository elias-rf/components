import { TEntity } from "@er/types/*";

export const ExcMP: TEntity =
  {
  "database": "plano",
  "table": "ExcMP",
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
      "field": "NroPDV",
      "label": "NroPDV",
      "name": "NroPDV",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
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
      "field": "CdTipoVenda",
      "label": "CdTipoVenda",
      "name": "CdTipoVenda",
      "type": "int",
      "size": 4,
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
      "field": "DtReal",
      "label": "DtReal",
      "name": "DtReal",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdCaixa",
      "label": "CdCaixa",
      "name": "CdCaixa",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
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
      "field": "VlDescGer",
      "label": "VlDescGer",
      "name": "VlDescGer",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CupomRef",
      "label": "CupomRef",
      "name": "CupomRef",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumCRM",
      "label": "NumCRM",
      "name": "NumCRM",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
