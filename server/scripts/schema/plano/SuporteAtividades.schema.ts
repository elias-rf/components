import { TEntity } from "@er/types/*";

export const SuporteAtividades: TEntity =
  {
  "database": "plano",
  "table": "SuporteAtividades",
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
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "CdTecnico",
      "label": "CdTecnico",
      "name": "CdTecnico",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtInicio",
      "label": "DtInicio",
      "name": "DtInicio",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtTermino",
      "label": "DtTermino",
      "name": "DtTermino",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "RzSocial",
      "label": "RzSocial",
      "name": "RzSocial",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "NmContato",
      "label": "NmContato",
      "name": "NmContato",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumeroRat",
      "label": "NumeroRat",
      "name": "NumeroRat",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Funcao",
      "label": "Funcao",
      "name": "Funcao",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "FgAtendimentoInterno",
      "label": "FgAtendimentoInterno",
      "name": "FgAtendimentoInterno",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DescricaoAtividade",
      "label": "DescricaoAtividade",
      "name": "DescricaoAtividade",
      "type": "string",
      "size": 2048,
      "allowNull": false
    }
  ]
}
