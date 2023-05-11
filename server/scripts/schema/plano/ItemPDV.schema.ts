import { TTableDef } from "@/types/model";

export const ItemPDV: TTableDef = {
  database: "plano",
  table: "ItemPDV",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
    },
    {
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDescGer",
      label: "VlDescGer",
      name: "VlDescGer",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDescDir",
      label: "VlDescDir",
      name: "VlDescDir",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqISS",
      label: "AliqISS",
      name: "AliqISS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlComissaoPrazo",
      label: "VlComissaoPrazo",
      name: "VlComissaoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlComissaoVista",
      label: "VlComissaoVista",
      name: "VlComissaoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "Atualizacao",
      label: "Atualizacao",
      name: "Atualizacao",
      typeField: "string",
    },
    {
      field: "CustoMedio",
      label: "CustoMedio",
      name: "CustoMedio",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
    },
    {
      field: "ImprimeComponentes",
      label: "ImprimeComponentes",
      name: "ImprimeComponentes",
      typeField: "string",
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",
    },
    {
      field: "ComplementoDescricao",
      label: "ComplementoDescricao",
      name: "ComplementoDescricao",
      typeField: "string",
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
    },
    {
      field: "PercLimiteComissao",
      label: "PercLimiteComissao",
      name: "PercLimiteComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ComplementoDesc",
      label: "ComplementoDesc",
      name: "ComplementoDesc",
      typeField: "string",
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "PontosMilhagem",
      label: "PontosMilhagem",
      name: "PontosMilhagem",
      typeField: "int",
    },
    {
      field: "PercComisVista",
      label: "PercComisVista",
      name: "PercComisVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComisPrazo",
      label: "PercComisPrazo",
      name: "PercComisPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComisVistaExtra",
      label: "PercComisVistaExtra",
      name: "PercComisVistaExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlComisVistaExtra",
      label: "VlComisVistaExtra",
      name: "VlComisVistaExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComisPrazoExtra",
      label: "PercComisPrazoExtra",
      name: "PercComisPrazoExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlComisPrazoExtra",
      label: "VlComisPrazoExtra",
      name: "VlComisPrazoExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SituacaoTributariaPIS",
      label: "SituacaoTributariaPIS",
      name: "SituacaoTributariaPIS",
      typeField: "int",
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseCalculoPIS",
      label: "BaseCalculoPIS",
      name: "BaseCalculoPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SituacaoTributariaCOFINS",
      label: "SituacaoTributariaCOFINS",
      name: "SituacaoTributariaCOFINS",
      typeField: "int",
    },
    {
      field: "BaseCalculoCOFINS",
      label: "BaseCalculoCOFINS",
      name: "BaseCalculoCOFINS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaCOFINS",
      label: "AliquotaCOFINS",
      name: "AliquotaCOFINS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoISS",
      label: "VlBaseCalculoISS",
      name: "VlBaseCalculoISS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlISS",
      label: "VlISS",
      name: "VlISS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SituacaoTributariaICMS",
      label: "SituacaoTributariaICMS",
      name: "SituacaoTributariaICMS",
      typeField: "int",
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCCF",
      label: "NumCCF",
      name: "NumCCF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumSerieECF",
      label: "NumSerieECF",
      name: "NumSerieECF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdContribuicaoApuradaPISCOFINS",
      label: "CdContribuicaoApuradaPISCOFINS",
      name: "CdContribuicaoApuradaPISCOFINS",
      typeField: "int",
    },
    {
      field: "VlAproximadoImpostoItem",
      label: "VlAproximadoImpostoItem",
      name: "VlAproximadoImpostoItem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleECF",
      label: "ControleECF",
      name: "ControleECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ControleCupom",
      label: "ControleCupom",
      name: "ControleCupom",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleSeq",
      label: "ControleSeq",
      name: "ControleSeq",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlAproximadoImpostoFederal",
      label: "VlAproximadoImpostoFederal",
      name: "VlAproximadoImpostoFederal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoEstadual",
      label: "VlAproximadoImpostoEstadual",
      name: "VlAproximadoImpostoEstadual",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAproximadoImpostoMunicipal",
      label: "VlAproximadoImpostoMunicipal",
      name: "VlAproximadoImpostoMunicipal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PlanoContaSped",
      label: "PlanoContaSped",
      name: "PlanoContaSped",
      typeField: "int",
    },
  ],
};
