import { TEntity } from "@er/types/*";

export const tManutencaoPreventiva: TEntity =
  {
  "database": "oftalmo",
  "table": "tManutencaoPreventiva",
  "fields": [
    {
      "field": "kManutencaoPreventiva",
      "label": "kManutencaoPreventiva",
      "name": "tManutencaoPreventiva_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
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
      "field": "DataManutencao",
      "label": "DataManutencao",
      "name": "DataManutencao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DataHoraInicio",
      "label": "DataHoraInicio",
      "name": "DataHoraInicio",
      "type": "datetime",
      "size": 8,
      "scale": 3
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
      "field": "MaterialUtilizadoItemProblema",
      "label": "MaterialUtilizadoItemProblema",
      "name": "MaterialUtilizadoItemProblema",
      "type": "string",
      "size": 16
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 16
    },
    {
      "field": "ResponsavelManutencao",
      "label": "ResponsavelManutencao",
      "name": "ResponsavelManutencao",
      "type": "string",
      "size": 150
    },
    {
      "field": "MotivoNaoConclusaoNoPrazo",
      "label": "MotivoNaoConclusaoNoPrazo",
      "name": "MotivoNaoConclusaoNoPrazo",
      "type": "string",
      "size": 16
    },
    {
      "field": "UsuarioConclusao",
      "label": "UsuarioConclusao",
      "name": "UsuarioConclusao",
      "type": "string",
      "size": 50
    },
    {
      "field": "LiberadoPor",
      "label": "LiberadoPor",
      "name": "LiberadoPor",
      "type": "string",
      "size": 150
    }
  ]
}
