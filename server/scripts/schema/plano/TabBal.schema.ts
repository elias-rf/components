import { TEntity } from "@er/types/*";

export const TabBal: TEntity =
  {
  "database": "plano",
  "table": "TabBal",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "Contagem1",
      "label": "Contagem1",
      "name": "Contagem1",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Contagem2",
      "label": "Contagem2",
      "name": "Contagem2",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EndPrateleiraAtual",
      "label": "EndPrateleiraAtual",
      "name": "EndPrateleiraAtual",
      "type": "string",
      "size": 15
    },
    {
      "field": "EndPrateleiraNovo",
      "label": "EndPrateleiraNovo",
      "name": "EndPrateleiraNovo",
      "type": "string",
      "size": 15
    },
    {
      "field": "DtContagem",
      "label": "DtContagem",
      "name": "DtContagem",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "IdReduzido",
      "label": "IdReduzido",
      "name": "IdReduzido",
      "type": "int",
      "size": 4
    },
    {
      "field": "StatusContagem",
      "label": "StatusContagem",
      "name": "StatusContagem",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumBalanco",
      "label": "NumBalanco",
      "name": "NumBalanco",
      "type": "int",
      "size": 2
    }
  ]
}
