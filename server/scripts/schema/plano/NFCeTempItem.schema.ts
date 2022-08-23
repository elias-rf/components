import { TEntity } from "@er/types/*";

export const NFCeTempItem: TEntity =
  {
  "database": "plano",
  "table": "NFCeTempItem",
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
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdRefEstoque",
      "label": "CdRefEstoque",
      "name": "CdRefEstoque",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdReferencia",
      "label": "CdReferencia",
      "name": "CdReferencia",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "FgImprimeComponentes",
      "label": "FgImprimeComponentes",
      "name": "FgImprimeComponentes",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercDesconto",
      "label": "PercDesconto",
      "name": "PercDesconto",
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
      "field": "VlLiquido",
      "label": "VlLiquido",
      "name": "VlLiquido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercDescMaxVendedor",
      "label": "PercDescMaxVendedor",
      "name": "PercDescMaxVendedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercDescMaxGerente",
      "label": "PercDescMaxGerente",
      "name": "PercDescMaxGerente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1,
      "allowNull": false
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
      "field": "FgVMSCard",
      "label": "FgVMSCard",
      "name": "FgVMSCard",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgServico",
      "label": "FgServico",
      "name": "FgServico",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPsico",
      "label": "FgPsico",
      "name": "FgPsico",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgTipoReceita",
      "label": "FgTipoReceita",
      "name": "FgTipoReceita",
      "type": "string",
      "size": 2
    },
    {
      "field": "FgLoteControlado",
      "label": "FgLoteControlado",
      "name": "FgLoteControlado",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoICMS",
      "label": "TipoTributacaoICMS",
      "name": "TipoTributacaoICMS",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoPIS",
      "label": "TipoTributacaoPIS",
      "name": "TipoTributacaoPIS",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaPIS",
      "label": "AliquotaPIS",
      "name": "AliquotaPIS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoCOFINS",
      "label": "TipoTributacaoCOFINS",
      "name": "TipoTributacaoCOFINS",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "AliquotaCOFINS",
      "label": "AliquotaCOFINS",
      "name": "AliquotaCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercComisVista",
      "label": "PercComisVista",
      "name": "PercComisVista",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercComisVistaExtra",
      "label": "PercComisVistaExtra",
      "name": "PercComisVistaExtra",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercComisPrazo",
      "label": "PercComisPrazo",
      "name": "PercComisPrazo",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercComisPrazoExtra",
      "label": "PercComisPrazoExtra",
      "name": "PercComisPrazoExtra",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CdBeneficioFiscal",
      "label": "CdBeneficioFiscal",
      "name": "CdBeneficioFiscal",
      "type": "string",
      "size": 10
    },
    {
      "field": "AliquotaDesoneracao",
      "label": "AliquotaDesoneracao",
      "name": "AliquotaDesoneracao",
      "type": "int",
      "size": 5
    },
    {
      "field": "VlDesoneracao",
      "label": "VlDesoneracao",
      "name": "VlDesoneracao",
      "type": "int",
      "size": 9,
      "scale": 2
    },
    {
      "field": "CdMotivoDesoneracao",
      "label": "CdMotivoDesoneracao",
      "name": "CdMotivoDesoneracao",
      "type": "int",
      "size": 5
    }
  ]
}
