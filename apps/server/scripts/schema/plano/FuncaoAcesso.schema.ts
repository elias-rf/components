import { TEntity } from "@er/types/*";

export const FuncaoAcesso: TEntity =
  {
  "database": "plano",
  "table": "FuncaoAcesso",
  "fields": [
    {
      "field": "CdSistema",
      "label": "CdSistema",
      "name": "CdSistema",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdFuncao",
      "label": "CdFuncao",
      "name": "CdFuncao",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NmFuncao",
      "label": "NmFuncao",
      "name": "NmFuncao",
      "type": "string",
      "size": 64,
      "allowNull": false
    }
  ]
}
