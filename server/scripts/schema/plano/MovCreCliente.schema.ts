import { TEntity } from "@er/types/*";

export const MovCreCliente: TEntity =
  {
  "database": "plano",
  "table": "MovCreCliente",
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDocumento",
      "label": "NumDocumento",
      "name": "NumDocumento",
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
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Dtlcto",
      "label": "Dtlcto",
      "name": "Dtlcto",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Valor",
      "label": "Valor",
      "name": "Valor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdUsuario",
      "label": "CdUsuario",
      "name": "CdUsuario",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "NumMapa",
      "label": "NumMapa",
      "name": "NumMapa",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtOcorrencia",
      "label": "DtOcorrencia",
      "name": "DtOcorrencia",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "TipoDocumento",
      "label": "TipoDocumento",
      "name": "TipoDocumento",
      "type": "string",
      "size": 1
    }
  ]
}
