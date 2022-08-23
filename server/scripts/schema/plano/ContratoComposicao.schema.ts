import { TEntity } from "@er/types/*";

export const ContratoComposicao: TEntity =
  {
  "database": "plano",
  "table": "ContratoComposicao",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DiaContrato",
      "label": "DiaContrato",
      "name": "DiaContrato",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdClienteInstalacao",
      "label": "CdClienteInstalacao",
      "name": "CdClienteInstalacao",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DtInstalacao",
      "label": "DtInstalacao",
      "name": "DtInstalacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltReajuste",
      "label": "DtUltReajuste",
      "name": "DtUltReajuste",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlAnterior",
      "label": "VlAnterior",
      "name": "VlAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
