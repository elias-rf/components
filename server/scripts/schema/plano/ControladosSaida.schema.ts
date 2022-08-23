import { TEntity } from "@er/types/*";

export const ControladosSaida: TEntity =
  {
  "database": "plano",
  "table": "ControladosSaida",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumPDV",
      "label": "NumPDV",
      "name": "NumPDV",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumDocumento",
      "label": "NumDocumento",
      "name": "NumDocumento",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
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
      "field": "QtdePrescrita",
      "label": "QtdePrescrita",
      "name": "QtdePrescrita",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdeVendida",
      "label": "QtdeVendida",
      "name": "QtdeVendida",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtReceita",
      "label": "DtReceita",
      "name": "DtReceita",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumReceita",
      "label": "NumReceita",
      "name": "NumReceita",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdComprador",
      "label": "CdComprador",
      "name": "CdComprador",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NomeComprador",
      "label": "NomeComprador",
      "name": "NomeComprador",
      "type": "string",
      "size": 70
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 70
    },
    {
      "field": "NumIdentidade",
      "label": "NumIdentidade",
      "name": "NumIdentidade",
      "type": "string",
      "size": 20
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20
    },
    {
      "field": "FgStatus",
      "label": "FgStatus",
      "name": "FgStatus",
      "type": "string",
      "size": 1
    },
    {
      "field": "NmPaciente",
      "label": "NmPaciente",
      "name": "NmPaciente",
      "type": "string",
      "size": 40
    },
    {
      "field": "TipoReceita",
      "label": "TipoReceita",
      "name": "TipoReceita",
      "type": "string",
      "size": 2
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TipoUsoMedicamento",
      "label": "TipoUsoMedicamento",
      "name": "TipoUsoMedicamento",
      "type": "int",
      "size": 2
    },
    {
      "field": "UfReceita",
      "label": "UfReceita",
      "name": "UfReceita",
      "type": "string",
      "size": 2
    },
    {
      "field": "TipoIdentidade",
      "label": "TipoIdentidade",
      "name": "TipoIdentidade",
      "type": "int",
      "size": 2
    },
    {
      "field": "UfIdentidade",
      "label": "UfIdentidade",
      "name": "UfIdentidade",
      "type": "string",
      "size": 2
    },
    {
      "field": "EmissorIdentidade",
      "label": "EmissorIdentidade",
      "name": "EmissorIdentidade",
      "type": "string",
      "size": 16
    },
    {
      "field": "NumLoteProduto",
      "label": "NumLoteProduto",
      "name": "NumLoteProduto",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumRegistroProduto",
      "label": "NumRegistroProduto",
      "name": "NumRegistroProduto",
      "type": "string",
      "size": 16
    },
    {
      "field": "Conselho",
      "label": "Conselho",
      "name": "Conselho",
      "type": "string",
      "size": 8
    },
    {
      "field": "UfConselho",
      "label": "UfConselho",
      "name": "UfConselho",
      "type": "string",
      "size": 2
    },
    {
      "field": "NumConselho",
      "label": "NumConselho",
      "name": "NumConselho",
      "type": "float",
      "size": 8
    },
    {
      "field": "FgGenerico",
      "label": "FgGenerico",
      "name": "FgGenerico",
      "type": "string",
      "size": 1
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
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "MotivoPerda",
      "label": "MotivoPerda",
      "name": "MotivoPerda",
      "type": "int",
      "size": 2
    },
    {
      "field": "UsoProlongado",
      "label": "UsoProlongado",
      "name": "UsoProlongado",
      "type": "int",
      "size": 2
    },
    {
      "field": "unidadeIdade",
      "label": "unidadeIdade",
      "name": "unidadeIdade",
      "type": "int",
      "size": 2
    },
    {
      "field": "Idade",
      "label": "Idade",
      "name": "Idade",
      "type": "int",
      "size": 2
    },
    {
      "field": "Sexo",
      "label": "Sexo",
      "name": "Sexo",
      "type": "string",
      "size": 1
    }
  ]
}
