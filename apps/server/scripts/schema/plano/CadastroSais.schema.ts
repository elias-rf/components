import { TEntity } from "@er/types/*";

export const CadastroSais: TEntity =
  {
  "database": "plano",
  "table": "CadastroSais",
  "fields": [
    {
      "field": "CdSal",
      "label": "CdSal",
      "name": "CadastroSais_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmSal",
      "label": "NmSal",
      "name": "NmSal",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "AbreviaturaSal",
      "label": "AbreviaturaSal",
      "name": "AbreviaturaSal",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "DoseMinima",
      "label": "DoseMinima",
      "name": "DoseMinima",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "DoseMaxima",
      "label": "DoseMaxima",
      "name": "DoseMaxima",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Volume",
      "label": "Volume",
      "name": "Volume",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "FgControlado",
      "label": "FgControlado",
      "name": "FgControlado",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}