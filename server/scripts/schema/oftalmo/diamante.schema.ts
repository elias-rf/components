import { TEntity } from "@er/types/*";

export const diamante: TEntity =
  {
  "database": "oftalmo",
  "table": "diamante",
  "fields": [
    {
      "field": "id",
      "label": "id",
      "name": "id",
      "type": "string",
      "size": 21,
      "allowNull": false
    },
    {
      "field": "diamante",
      "label": "diamante",
      "name": "diamante",
      "type": "string",
      "size": 100
    },
    {
      "field": "tipo",
      "label": "tipo",
      "name": "tipo",
      "type": "string",
      "size": 2
    },
    {
      "field": "raio",
      "label": "raio",
      "name": "raio",
      "type": "float",
      "size": 8
    },
    {
      "field": "espessura",
      "label": "espessura",
      "name": "espessura",
      "type": "float",
      "size": 8
    },
    {
      "field": "fkMaquina",
      "label": "fkMaquina",
      "name": "fkMaquina",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkFuncionario",
      "label": "fkFuncionario",
      "name": "fkFuncionario",
      "type": "int",
      "size": 4
    },
    {
      "field": "dataEntrada",
      "label": "dataEntrada",
      "name": "dataEntrada",
      "type": "date",
      "size": 3
    },
    {
      "field": "ordemInicial",
      "label": "ordemInicial",
      "name": "ordemInicial",
      "type": "int",
      "size": 4
    },
    {
      "field": "dataSaida",
      "label": "dataSaida",
      "name": "dataSaida",
      "type": "date",
      "size": 3
    },
    {
      "field": "ordemFinal",
      "label": "ordemFinal",
      "name": "ordemFinal",
      "type": "int",
      "size": 4
    },
    {
      "field": "qtdCortes",
      "label": "qtdCortes",
      "name": "qtdCortes",
      "type": "int",
      "size": 4
    }
  ]
}
