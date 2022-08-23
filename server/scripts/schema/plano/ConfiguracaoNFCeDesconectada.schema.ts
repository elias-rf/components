import { TEntity } from "@er/types/*";

export const ConfiguracaoNFCeDesconectada: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoNFCeDesconectada",
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
      "field": "Estacao",
      "label": "Estacao",
      "name": "Estacao",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DiretorioMovimento",
      "label": "DiretorioMovimento",
      "name": "DiretorioMovimento",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DiretorioResultado",
      "label": "DiretorioResultado",
      "name": "DiretorioResultado",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "DiretorioProcNFe",
      "label": "DiretorioProcNFe",
      "name": "DiretorioProcNFe",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "RetaguardaServidor",
      "label": "RetaguardaServidor",
      "name": "RetaguardaServidor",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "RetaguardaUsuario",
      "label": "RetaguardaUsuario",
      "name": "RetaguardaUsuario",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "RetaguardaSenha",
      "label": "RetaguardaSenha",
      "name": "RetaguardaSenha",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "RetaguardaBancoDados",
      "label": "RetaguardaBancoDados",
      "name": "RetaguardaBancoDados",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "IntervaloSincronizacao",
      "label": "IntervaloSincronizacao",
      "name": "IntervaloSincronizacao",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "FgTabelasNotas",
      "label": "FgTabelasNotas",
      "name": "FgTabelasNotas",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgTabelasCaixa",
      "label": "FgTabelasCaixa",
      "name": "FgTabelasCaixa",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgTabelaPedidos",
      "label": "FgTabelaPedidos",
      "name": "FgTabelaPedidos",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgTabelasContasReceber",
      "label": "FgTabelasContasReceber",
      "name": "FgTabelasContasReceber",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
