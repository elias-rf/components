import { TTableDef } from "@mono/types/model";

export const ItemPDV: TTableDef = {
  database: "plano",
  table: "ItemPDV",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
    },
    {
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",
      size: 15,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDescGer",
      label: "VlDescGer",
      name: "VlDescGer",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDescDir",
      label: "VlDescDir",
      name: "VlDescDir",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliqISS",
      label: "AliqISS",
      name: "AliqISS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlComissaoPrazo",
      label: "VlComissaoPrazo",
      name: "VlComissaoPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlComissaoVista",
      label: "VlComissaoVista",
      name: "VlComissaoVista",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "Atualizacao",
      label: "Atualizacao",
      name: "Atualizacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "CustoMedio",
      label: "CustoMedio",
      name: "CustoMedio",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
      size: 20,
    },
    {
      field: "ImprimeComponentes",
      label: "ImprimeComponentes",
      name: "ImprimeComponentes",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",
      size: 1,
    },
    {
      field: "ComplementoDescricao",
      label: "ComplementoDescricao",
      name: "ComplementoDescricao",
      typeField: "string",
      size: 20,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
      size: 16,
    },
    {
      field: "PercLimiteComissao",
      label: "PercLimiteComissao",
      name: "PercLimiteComissao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ComplementoDesc",
      label: "ComplementoDesc",
      name: "ComplementoDesc",
      typeField: "string",
      size: 15,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "PontosMilhagem",
      label: "PontosMilhagem",
      name: "PontosMilhagem",
      typeField: "int",
      size: 2,
    },
    {
      field: "PercComisVista",
      label: "PercComisVista",
      name: "PercComisVista",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComisPrazo",
      label: "PercComisPrazo",
      name: "PercComisPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComisVistaExtra",
      label: "PercComisVistaExtra",
      name: "PercComisVistaExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlComisVistaExtra",
      label: "VlComisVistaExtra",
      name: "VlComisVistaExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComisPrazoExtra",
      label: "PercComisPrazoExtra",
      name: "PercComisPrazoExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlComisPrazoExtra",
      label: "VlComisPrazoExtra",
      name: "VlComisPrazoExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SituacaoTributariaPIS",
      label: "SituacaoTributariaPIS",
      name: "SituacaoTributariaPIS",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "BaseCalculoPIS",
      label: "BaseCalculoPIS",
      name: "BaseCalculoPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SituacaoTributariaCOFINS",
      label: "SituacaoTributariaCOFINS",
      name: "SituacaoTributariaCOFINS",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalculoCOFINS",
      label: "BaseCalculoCOFINS",
      name: "BaseCalculoCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaCOFINS",
      label: "AliquotaCOFINS",
      name: "AliquotaCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoISS",
      label: "VlBaseCalculoISS",
      name: "VlBaseCalculoISS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlISS",
      label: "VlISS",
      name: "VlISS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SituacaoTributariaICMS",
      label: "SituacaoTributariaICMS",
      name: "SituacaoTributariaICMS",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumCCF",
      label: "NumCCF",
      name: "NumCCF",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumSerieECF",
      label: "NumSerieECF",
      name: "NumSerieECF",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "CdContribuicaoApuradaPISCOFINS",
      label: "CdContribuicaoApuradaPISCOFINS",
      name: "CdContribuicaoApuradaPISCOFINS",
      typeField: "int",
      size: 5,
    },
    {
      field: "VlAproximadoImpostoItem",
      label: "VlAproximadoImpostoItem",
      name: "VlAproximadoImpostoItem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleECF",
      label: "ControleECF",
      name: "ControleECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "ControleCupom",
      label: "ControleCupom",
      name: "ControleCupom",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleSeq",
      label: "ControleSeq",
      name: "ControleSeq",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlAproximadoImpostoFederal",
      label: "VlAproximadoImpostoFederal",
      name: "VlAproximadoImpostoFederal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAproximadoImpostoEstadual",
      label: "VlAproximadoImpostoEstadual",
      name: "VlAproximadoImpostoEstadual",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAproximadoImpostoMunicipal",
      label: "VlAproximadoImpostoMunicipal",
      name: "VlAproximadoImpostoMunicipal",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PlanoContaSped",
      label: "PlanoContaSped",
      name: "PlanoContaSped",
      typeField: "int",
      size: 9,
    },
  ],
};
