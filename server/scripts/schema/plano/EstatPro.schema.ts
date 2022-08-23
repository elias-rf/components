import { TEntity } from "@er/types/*";

export const EstatPro: TEntity =
  {
  "database": "plano",
  "table": "EstatPro",
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
      "field": "AnoRef",
      "label": "AnoRef",
      "name": "AnoRef",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MesRef",
      "label": "MesRef",
      "name": "MesRef",
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
      "field": "EstInicial",
      "label": "EstInicial",
      "name": "EstInicial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Entradas",
      "label": "Entradas",
      "name": "Entradas",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Saidas",
      "label": "Saidas",
      "name": "Saidas",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Ajustes",
      "label": "Ajustes",
      "name": "Ajustes",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdCompras",
      "label": "QtdCompras",
      "name": "QtdCompras",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdMedio",
      "label": "QtdMedio",
      "name": "QtdMedio",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdVendas",
      "label": "QtdVendas",
      "name": "QtdVendas",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCusto",
      "label": "VlCusto",
      "name": "VlCusto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlMedio",
      "label": "VlMedio",
      "name": "VlMedio",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlVendas",
      "label": "VlVendas",
      "name": "VlVendas",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCustoMedio",
      "label": "VlCustoMedio",
      "name": "VlCustoMedio",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlVenda",
      "label": "VlVenda",
      "name": "VlVenda",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAtacado",
      "label": "VlAtacado",
      "name": "VlAtacado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EstInicialPsico",
      "label": "EstInicialPsico",
      "name": "EstInicialPsico",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
