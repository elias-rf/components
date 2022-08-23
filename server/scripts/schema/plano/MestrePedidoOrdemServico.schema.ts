import { TEntity } from "@er/types/*";

export const MestrePedidoOrdemServico: TEntity =
  {
  "database": "plano",
  "table": "MestrePedidoOrdemServico",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Veiculo",
      "label": "Veiculo",
      "name": "Veiculo",
      "type": "string",
      "size": 50
    },
    {
      "field": "Marca",
      "label": "Marca",
      "name": "Marca",
      "type": "string",
      "size": 40
    },
    {
      "field": "Cor",
      "label": "Cor",
      "name": "Cor",
      "type": "string",
      "size": 20
    },
    {
      "field": "Ano",
      "label": "Ano",
      "name": "Ano",
      "type": "int",
      "size": 4
    },
    {
      "field": "Placa",
      "label": "Placa",
      "name": "Placa",
      "type": "string",
      "size": 7
    },
    {
      "field": "Frota",
      "label": "Frota",
      "name": "Frota",
      "type": "string",
      "size": 25
    },
    {
      "field": "NumSinistro",
      "label": "NumSinistro",
      "name": "NumSinistro",
      "type": "string",
      "size": 20
    },
    {
      "field": "Motorista",
      "label": "Motorista",
      "name": "Motorista",
      "type": "string",
      "size": 50
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 4
    },
    {
      "field": "KM",
      "label": "KM",
      "name": "KM",
      "type": "int",
      "size": 9,
      "scale": 3
    }
  ]
}
