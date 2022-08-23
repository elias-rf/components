import { TEntity } from "@er/types/*";

export const ObsNota: TEntity =
  {
  "database": "plano",
  "table": "ObsNota",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdTransp",
      "label": "CdTransp",
      "name": "CdTransp",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Especie",
      "label": "Especie",
      "name": "Especie",
      "type": "string",
      "size": 10
    },
    {
      "field": "Frete",
      "label": "Frete",
      "name": "Frete",
      "type": "string",
      "size": 1
    },
    {
      "field": "Informacoes",
      "label": "Informacoes",
      "name": "Informacoes",
      "type": "string",
      "size": 255
    },
    {
      "field": "Informacoes2",
      "label": "Informacoes2",
      "name": "Informacoes2",
      "type": "string",
      "size": 255
    },
    {
      "field": "Informacoes3",
      "label": "Informacoes3",
      "name": "Informacoes3",
      "type": "string",
      "size": 255
    },
    {
      "field": "Informacoes4",
      "label": "Informacoes4",
      "name": "Informacoes4",
      "type": "string",
      "size": 255
    },
    {
      "field": "Informacoes5",
      "label": "Informacoes5",
      "name": "Informacoes5",
      "type": "string",
      "size": 255
    },
    {
      "field": "Marca",
      "label": "Marca",
      "name": "Marca",
      "type": "string",
      "size": 10
    },
    {
      "field": "Numero",
      "label": "Numero",
      "name": "Numero",
      "type": "string",
      "size": 10
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "PlacaVeiculo",
      "label": "PlacaVeiculo",
      "name": "PlacaVeiculo",
      "type": "string",
      "size": 10
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "UfVeiculo",
      "label": "UfVeiculo",
      "name": "UfVeiculo",
      "type": "string",
      "size": 2
    },
    {
      "field": "PesoBruto",
      "label": "PesoBruto",
      "name": "PesoBruto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PesoLiquido",
      "label": "PesoLiquido",
      "name": "PesoLiquido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Informacoes6",
      "label": "Informacoes6",
      "name": "Informacoes6",
      "type": "string",
      "size": 255
    },
    {
      "field": "Informacoes7",
      "label": "Informacoes7",
      "name": "Informacoes7",
      "type": "string",
      "size": 255
    },
    {
      "field": "RNTC",
      "label": "RNTC",
      "name": "RNTC",
      "type": "string",
      "size": 20
    }
  ]
}
