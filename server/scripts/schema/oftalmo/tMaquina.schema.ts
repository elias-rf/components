import { TEntity } from "@er/types/*";

export const tMaquina: TEntity =
  {
  "database": "oftalmo",
  "table": "tMaquina",
  "fields": [
    {
      "field": "kMaquina",
      "label": "kMaquina",
      "name": "tMaquina_id",
      "type": "string",
      "size": 30,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NomeMaquina",
      "label": "NomeMaquina",
      "name": "NomeMaquina",
      "type": "string",
      "size": 100,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 50
    },
    {
      "field": "fkDivisao",
      "label": "fkDivisao",
      "name": "fkDivisao",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkDivisao",
      "label": "fkDivisao",
      "name": "fkDivisao",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkSetor",
      "label": "fkSetor",
      "name": "fkSetor",
      "type": "int",
      "size": 4
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 200
    },
    {
      "field": "FrequenciaManutencao",
      "label": "FrequenciaManutencao",
      "name": "FrequenciaManutencao",
      "type": "string",
      "size": 10
    },
    {
      "field": "Ativo",
      "label": "Ativo",
      "name": "Ativo",
      "type": "int",
      "size": 1,
      "defaultValue": "1"
    }
  ]
}
