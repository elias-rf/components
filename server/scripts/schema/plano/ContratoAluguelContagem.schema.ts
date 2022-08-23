import { TEntity } from "@er/types/*";

export const ContratoAluguelContagem: TEntity =
  {
  "database": "plano",
  "table": "ContratoAluguelContagem",
  "fields": [
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
      "field": "DiaContr",
      "label": "DiaContr",
      "name": "DiaContr",
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
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "NumSerie",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "DtContagem",
      "label": "DtContagem",
      "name": "DtContagem",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "ContagemAnterior",
      "label": "ContagemAnterior",
      "name": "ContagemAnterior",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ContagemAtual",
      "label": "ContagemAtual",
      "name": "ContagemAtual",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
