import { TEntity } from "@er/types/*";

export const ConfiguracaoImpConvenio: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoImpConvenio",
  "fields": [
    {
      "field": "IdLayOut",
      "label": "IdLayOut",
      "name": "ConfiguracaoImpConvenio_id",
      "type": "string",
      "size": 20,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "MatriculaInicial",
      "label": "MatriculaInicial",
      "name": "MatriculaInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MatriculaFinal",
      "label": "MatriculaFinal",
      "name": "MatriculaFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NomeInicial",
      "label": "NomeInicial",
      "name": "NomeInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NomeFinal",
      "label": "NomeFinal",
      "name": "NomeFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "BloqueioInicial",
      "label": "BloqueioInicial",
      "name": "BloqueioInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "BloqueioFinal",
      "label": "BloqueioFinal",
      "name": "BloqueioFinal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TextoBloqueio",
      "label": "TextoBloqueio",
      "name": "TextoBloqueio",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "LimiteInicial",
      "label": "LimiteInicial",
      "name": "LimiteInicial",
      "type": "int",
      "size": 2
    },
    {
      "field": "LimiteFinal",
      "label": "LimiteFinal",
      "name": "LimiteFinal",
      "type": "int",
      "size": 2
    },
    {
      "field": "CasasDecimaisLimite",
      "label": "CasasDecimaisLimite",
      "name": "CasasDecimaisLimite",
      "type": "int",
      "size": 2
    },
    {
      "field": "TitularInicial",
      "label": "TitularInicial",
      "name": "TitularInicial",
      "type": "int",
      "size": 4
    },
    {
      "field": "TitularFinal",
      "label": "TitularFinal",
      "name": "TitularFinal",
      "type": "int",
      "size": 4
    },
    {
      "field": "TextoTitular",
      "label": "TextoTitular",
      "name": "TextoTitular",
      "type": "string",
      "size": 16
    },
    {
      "field": "DependenteInicial",
      "label": "DependenteInicial",
      "name": "DependenteInicial",
      "type": "int",
      "size": 4
    },
    {
      "field": "DependenteFinal",
      "label": "DependenteFinal",
      "name": "DependenteFinal",
      "type": "int",
      "size": 4
    },
    {
      "field": "TextoDependente",
      "label": "TextoDependente",
      "name": "TextoDependente",
      "type": "string",
      "size": 16
    }
  ]
}
