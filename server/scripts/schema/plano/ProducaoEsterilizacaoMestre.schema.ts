import { TEntity } from "@er/types/*";

export const ProducaoEsterilizacaoMestre: TEntity =
  {
  "database": "plano",
  "table": "ProducaoEsterilizacaoMestre",
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
      "field": "NumLoteEsterilizacao",
      "label": "NumLoteEsterilizacao",
      "name": "NumLoteEsterilizacao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "TipoEsterilizacao",
      "label": "TipoEsterilizacao",
      "name": "TipoEsterilizacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtEnvio",
      "label": "DtEnvio",
      "name": "DtEnvio",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtRetorno",
      "label": "DtRetorno",
      "name": "DtRetorno",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Caixas",
      "label": "Caixas",
      "name": "Caixas",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Resultado",
      "label": "Resultado",
      "name": "Resultado",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
