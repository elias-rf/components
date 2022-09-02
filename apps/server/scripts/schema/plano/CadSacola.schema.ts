import { TEntity } from "@er/types/*";

export const CadSacola: TEntity =
  {
  "database": "plano",
  "table": "CadSacola",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
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
      "field": "CdSacola",
      "label": "CdSacola",
      "name": "CdSacola",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 70,
      "allowNull": false
    },
    {
      "field": "CorSacola",
      "label": "CorSacola",
      "name": "CorSacola",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "CdAlca",
      "label": "CdAlca",
      "name": "CdAlca",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdFrenteVerso",
      "label": "CdFrenteVerso",
      "name": "CdFrenteVerso",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdeCliche",
      "label": "QtdeCliche",
      "name": "QtdeCliche",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CoreImpressao",
      "label": "CoreImpressao",
      "name": "CoreImpressao",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Foto",
      "label": "Foto",
      "name": "Foto",
      "type": "ntext",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024,
      "allowNull": false
    }
  ]
}
