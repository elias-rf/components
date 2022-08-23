import { TEntity } from "@er/types/*";

export const ItemPDV: TEntity =
  {
  "database": "plano",
  "table": "ItemPDV",
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
      "field": "NroPDV",
      "label": "NroPDV",
      "name": "NroPDV",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15
    },
    {
      "field": "CdRefEstoque",
      "label": "CdRefEstoque",
      "name": "CdRefEstoque",
      "type": "string",
      "size": 15
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
      "field": "VlUnitario",
      "label": "VlUnitario",
      "name": "VlUnitario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDescGer",
      "label": "VlDescGer",
      "name": "VlDescGer",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDescDir",
      "label": "VlDescDir",
      "name": "VlDescDir",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlLiquido",
      "label": "VlLiquido",
      "name": "VlLiquido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliqISS",
      "label": "AliqISS",
      "name": "AliqISS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlComissaoPrazo",
      "label": "VlComissaoPrazo",
      "name": "VlComissaoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlComissaoVista",
      "label": "VlComissaoVista",
      "name": "VlComissaoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "Atualizacao",
      "label": "Atualizacao",
      "name": "Atualizacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "CustoMedio",
      "label": "CustoMedio",
      "name": "CustoMedio",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
      "type": "string",
      "size": 20
    },
    {
      "field": "ImprimeComponentes",
      "label": "ImprimeComponentes",
      "name": "ImprimeComponentes",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "ComplementoDescricao",
      "label": "ComplementoDescricao",
      "name": "ComplementoDescricao",
      "type": "string",
      "size": 20
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 16
    },
    {
      "field": "PercLimiteComissao",
      "label": "PercLimiteComissao",
      "name": "PercLimiteComissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ComplementoDesc",
      "label": "ComplementoDesc",
      "name": "ComplementoDesc",
      "type": "string",
      "size": 15
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
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "PontosMilhagem",
      "label": "PontosMilhagem",
      "name": "PontosMilhagem",
      "type": "int",
      "size": 2
    },
    {
      "field": "PercComisVista",
      "label": "PercComisVista",
      "name": "PercComisVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComisPrazo",
      "label": "PercComisPrazo",
      "name": "PercComisPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComisVistaExtra",
      "label": "PercComisVistaExtra",
      "name": "PercComisVistaExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlComisVistaExtra",
      "label": "VlComisVistaExtra",
      "name": "VlComisVistaExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComisPrazoExtra",
      "label": "PercComisPrazoExtra",
      "name": "PercComisPrazoExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlComisPrazoExtra",
      "label": "VlComisPrazoExtra",
      "name": "VlComisPrazoExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SituacaoTributariaPIS",
      "label": "SituacaoTributariaPIS",
      "name": "SituacaoTributariaPIS",
      "type": "int",
      "size": 2
    },
    {
      "field": "AliquotaPIS",
      "label": "AliquotaPIS",
      "name": "AliquotaPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BaseCalculoPIS",
      "label": "BaseCalculoPIS",
      "name": "BaseCalculoPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPIS",
      "label": "VlPIS",
      "name": "VlPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SituacaoTributariaCOFINS",
      "label": "SituacaoTributariaCOFINS",
      "name": "SituacaoTributariaCOFINS",
      "type": "int",
      "size": 2
    },
    {
      "field": "BaseCalculoCOFINS",
      "label": "BaseCalculoCOFINS",
      "name": "BaseCalculoCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaCOFINS",
      "label": "AliquotaCOFINS",
      "name": "AliquotaCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlCOFINS",
      "label": "VlCOFINS",
      "name": "VlCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMS",
      "label": "VlICMS",
      "name": "VlICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoISS",
      "label": "VlBaseCalculoISS",
      "name": "VlBaseCalculoISS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlISS",
      "label": "VlISS",
      "name": "VlISS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoPIS",
      "label": "VlBaseCalculoPIS",
      "name": "VlBaseCalculoPIS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoCOFINS",
      "label": "VlBaseCalculoCOFINS",
      "name": "VlBaseCalculoCOFINS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SituacaoTributariaICMS",
      "label": "SituacaoTributariaICMS",
      "name": "SituacaoTributariaICMS",
      "type": "int",
      "size": 2
    },
    {
      "field": "AliquotaICMS",
      "label": "AliquotaICMS",
      "name": "AliquotaICMS",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumCOO",
      "label": "NumCOO",
      "name": "NumCOO",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumCCF",
      "label": "NumCCF",
      "name": "NumCCF",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumSerieECF",
      "label": "NumSerieECF",
      "name": "NumSerieECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "CdContribuicaoApuradaPISCOFINS",
      "label": "CdContribuicaoApuradaPISCOFINS",
      "name": "CdContribuicaoApuradaPISCOFINS",
      "type": "int",
      "size": 5
    },
    {
      "field": "VlAproximadoImpostoItem",
      "label": "VlAproximadoImpostoItem",
      "name": "VlAproximadoImpostoItem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ControleFilial",
      "label": "ControleFilial",
      "name": "ControleFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ControleECF",
      "label": "ControleECF",
      "name": "ControleECF",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ControleCupom",
      "label": "ControleCupom",
      "name": "ControleCupom",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ControleSeq",
      "label": "ControleSeq",
      "name": "ControleSeq",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlAproximadoImpostoFederal",
      "label": "VlAproximadoImpostoFederal",
      "name": "VlAproximadoImpostoFederal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoEstadual",
      "label": "VlAproximadoImpostoEstadual",
      "name": "VlAproximadoImpostoEstadual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlAproximadoImpostoMunicipal",
      "label": "VlAproximadoImpostoMunicipal",
      "name": "VlAproximadoImpostoMunicipal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PlanoContaSped",
      "label": "PlanoContaSped",
      "name": "PlanoContaSped",
      "type": "int",
      "size": 9
    }
  ]
}
