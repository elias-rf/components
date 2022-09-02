import { TEntity } from "@er/types/*";

export const LogPro: TEntity =
  {
  "database": "plano",
  "table": "LogPro",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtPromocaoFinal",
      "label": "DtPromocaoFinal",
      "name": "DtPromocaoFinal",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtPromocaoInicial",
      "label": "DtPromocaoInicial",
      "name": "DtPromocaoInicial",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "TipLog",
      "label": "TipLog",
      "name": "TipLog",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlValor",
      "label": "VlValor",
      "name": "VlValor",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
