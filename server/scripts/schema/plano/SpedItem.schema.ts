import { TTableDef } from "@/types/model";

export const SpedItem: TTableDef = {
  database: "plano",
  table: "SpedItem",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoEmitente",
      label: "TipoEmitente",
      name: "TipoEmitente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SubSerie",
      label: "SubSerie",
      name: "SubSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",

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

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "IndMovimento",
      label: "IndMovimento",
      name: "IndMovimento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CFOPItem",
      label: "CFOPItem",
      name: "CFOPItem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdNatureza",
      label: "CdNatureza",
      name: "CdNatureza",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlProduto",
      label: "VlProduto",
      name: "VlProduto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSuframa",
      label: "VlSuframa",
      name: "VlSuframa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFreteItem",
      label: "VlFreteItem",
      name: "VlFreteItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSeguroItem",
      label: "VlSeguroItem",
      name: "VlSeguroItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDespesaAcessoriaItem",
      label: "VlDespesaAcessoriaItem",
      name: "VlDespesaAcessoriaItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalItem",
      label: "VlTotalItem",
      name: "VlTotalItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CSTICMS",
      label: "CSTICMS",
      name: "CSTICMS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSItem",
      label: "VlBaseCalculoICMSItem",
      name: "VlBaseCalculoICMSItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSItem",
      label: "VlICMSItem",
      name: "VlICMSItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSSTItem",
      label: "VlBaseCalculoICMSSTItem",
      name: "VlBaseCalculoICMSSTItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMSST",
      label: "AliquotaICMSST",
      name: "AliquotaICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSSTItem",
      label: "VlICMSSTItem",
      name: "VlICMSSTItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CSTIPI",
      label: "CSTIPI",
      name: "CSTIPI",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEnquadramentoIPI",
      label: "CdEnquadramentoIPI",
      name: "CdEnquadramentoIPI",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoIPIItem",
      label: "VlBaseCalculoIPIItem",
      name: "VlBaseCalculoIPIItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaIPI",
      label: "AliquotaIPI",
      name: "AliquotaIPI",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIPIItem",
      label: "VlIPIItem",
      name: "VlIPIItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCreditoPISCOFINS",
      label: "CdCreditoPISCOFINS",
      name: "CdCreditoPISCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "IndOrigemCreditoPISCOFINS",
      label: "IndOrigemCreditoPISCOFINS",
      name: "IndOrigemCreditoPISCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdContApuradaPISCOFINS",
      label: "CdContApuradaPISCOFINS",
      name: "CdContApuradaPISCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdBaseCreditoPISCOFINS",
      label: "CdBaseCreditoPISCOFINS",
      name: "CdBaseCreditoPISCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdNaturezaPISCOFINS",
      label: "CdNaturezaPISCOFINS",
      name: "CdNaturezaPISCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CSTPIS",
      label: "CSTPIS",
      name: "CSTPIS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoPISItem",
      label: "VlBaseCalculoPISItem",
      name: "VlBaseCalculoPISItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPISItem",
      label: "VlPISItem",
      name: "VlPISItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPISSTItem",
      label: "VlPISSTItem",
      name: "VlPISSTItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CSTCOFINS",
      label: "CSTCOFINS",
      name: "CSTCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoCOFINSItem",
      label: "VlBaseCalculoCOFINSItem",
      name: "VlBaseCalculoCOFINSItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCOFINS",
      label: "AliquotaCOFINS",
      name: "AliquotaCOFINS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCOFINSItem",
      label: "VlCOFINSItem",
      name: "VlCOFINSItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCOFINSSTItem",
      label: "VlCOFINSSTItem",
      name: "VlCOFINSSTItem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleEstoque",
      label: "ControleEstoque",
      name: "ControleEstoque",
      typeField: "int",
    },
    {
      field: "PlanoContaSped",
      label: "PlanoContaSped",
      name: "PlanoContaSped",
      typeField: "int",
    },
  ],
};
