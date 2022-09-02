import { TEntity } from "@er/types/*";

export const LogIntegracao: TEntity =
  {
  "database": "plano",
  "table": "LogIntegracao",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "LogIntegracao_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DHArquivo",
      "label": "DHArquivo",
      "name": "DHArquivo",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "IdEquipamento",
      "label": "IdEquipamento",
      "name": "IdEquipamento",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "EnderecoEmail",
      "label": "EnderecoEmail",
      "name": "EnderecoEmail",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "QtdeArquivos",
      "label": "QtdeArquivos",
      "name": "QtdeArquivos",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Mensagem",
      "label": "Mensagem",
      "name": "Mensagem",
      "type": "string",
      "size": 1024,
      "allowNull": false
    }
  ]
}
