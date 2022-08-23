import { TEntity } from "@er/types/*";

export const tManutencaoCorretiva: TEntity =
  {
  "database": "oftalmo",
  "table": "tManutencaoCorretiva",
  "fields": [
    {
      "field": "kManutencaoCorretiva",
      "label": "kManutencaoCorretiva",
      "name": "tManutencaoCorretiva_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DataHoraInicio",
      "label": "DataHoraInicio",
      "name": "DataHoraInicio",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "fkFuncionario",
      "label": "fkFuncionario",
      "name": "fkFuncionario",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkMaquina",
      "label": "fkMaquina",
      "name": "fkMaquina",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "DescricaoProblema",
      "label": "DescricaoProblema",
      "name": "DescricaoProblema",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DataHoraFinal",
      "label": "DataHoraFinal",
      "name": "DataHoraFinal",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Diagnostico",
      "label": "Diagnostico",
      "name": "Diagnostico",
      "type": "string",
      "size": 16
    },
    {
      "field": "DescricaoSolucao",
      "label": "DescricaoSolucao",
      "name": "DescricaoSolucao",
      "type": "string",
      "size": 16
    },
    {
      "field": "ResponsavelManutencao",
      "label": "ResponsavelManutencao",
      "name": "ResponsavelManutencao",
      "type": "string",
      "size": 100
    },
    {
      "field": "Travado",
      "label": "Travado",
      "name": "Travado",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "UsuarioConclusao",
      "label": "UsuarioConclusao",
      "name": "UsuarioConclusao",
      "type": "string",
      "size": 50
    }
  ]
}
