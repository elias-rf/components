import { TEntity } from "@er/types/*";

export const ProdutoLenteContato: TEntity =
  {
  "database": "plano",
  "table": "ProdutoLenteContato",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "ProdutoLenteContato_id",
      "type": "string",
      "size": 16,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Dioptria",
      "label": "Dioptria",
      "name": "Dioptria",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "Raio1",
      "label": "Raio1",
      "name": "Raio1",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "Raio2",
      "label": "Raio2",
      "name": "Raio2",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "Espessura",
      "label": "Espessura",
      "name": "Espessura",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "EspessuraMinima",
      "label": "EspessuraMinima",
      "name": "EspessuraMinima",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "EspessuraMaxima",
      "label": "EspessuraMaxima",
      "name": "EspessuraMaxima",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "BLFNominal",
      "label": "BLFNominal",
      "name": "BLFNominal",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "BLFMinimo",
      "label": "BLFMinimo",
      "name": "BLFMinimo",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "BLFMaximo",
      "label": "BLFMaximo",
      "name": "BLFMaximo",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    }
  ]
}
