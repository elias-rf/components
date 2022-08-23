import { TEntity } from "@er/types/*";

export const NFCeTempMestre: TEntity =
  {
  "database": "plano",
  "table": "NFCeTempMestre",
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
      "field": "Estacao",
      "label": "Estacao",
      "name": "Estacao",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DtOperacao",
      "label": "DtOperacao",
      "name": "DtOperacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "IdOperacao",
      "label": "IdOperacao",
      "name": "IdOperacao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CPFCNPJCliente",
      "label": "CPFCNPJCliente",
      "name": "CPFCNPJCliente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "EmailCliente",
      "label": "EmailCliente",
      "name": "EmailCliente",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdVendedorExtra",
      "label": "CdVendedorExtra",
      "name": "CdVendedorExtra",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdTipoVenda",
      "label": "CdTipoVenda",
      "name": "CdTipoVenda",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescGer",
      "label": "VlDescGer",
      "name": "VlDescGer",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdSetor",
      "label": "CdSetor",
      "name": "CdSetor",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Localizacao",
      "label": "Localizacao",
      "name": "Localizacao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "FgVendaExterna",
      "label": "FgVendaExterna",
      "name": "FgVendaExterna",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Fase",
      "label": "Fase",
      "name": "Fase",
      "type": "string",
      "size": 16
    },
    {
      "field": "FgAbatimento",
      "label": "FgAbatimento",
      "name": "FgAbatimento",
      "type": "string",
      "size": 1
    }
  ]
}
