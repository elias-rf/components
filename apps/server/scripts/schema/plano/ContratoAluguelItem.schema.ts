import { TEntity } from "@er/types/*";

export const ContratoAluguelItem: TEntity =
  {
  "database": "plano",
  "table": "ContratoAluguelItem",
  "fields": [
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
      "field": "DiaContr",
      "label": "DiaContr",
      "name": "DiaContr",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "NumSerie",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "Localizacao",
      "label": "Localizacao",
      "name": "Localizacao",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "NmContato",
      "label": "NmContato",
      "name": "NmContato",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20,
      "allowNull": false
    }
  ]
}