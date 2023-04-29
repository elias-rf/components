import { TTableDef } from "@mono/types/model";

export const SpedItem: TTableDef = {
  database: "plano",
  table: "SpedItem",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "TipoEmitente",
      label: "TipoEmitente",
      name: "TipoEmitente",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SubSerie",
      label: "SubSerie",
      name: "SubSerie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",
      size: 2,
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
      size: 16,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "IndMovimento",
      label: "IndMovimento",
      name: "IndMovimento",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
      size: 6,
      allowNull: false,
    },
    {
      field: "CFOPItem",
      label: "CFOPItem",
      name: "CFOPItem",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdNatureza",
      label: "CdNatureza",
      name: "CdNatureza",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlProduto",
      label: "VlProduto",
      name: "VlProduto",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSuframa",
      label: "VlSuframa",
      name: "VlSuframa",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFreteItem",
      label: "VlFreteItem",
      name: "VlFreteItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSeguroItem",
      label: "VlSeguroItem",
      name: "VlSeguroItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDespesaAcessoriaItem",
      label: "VlDespesaAcessoriaItem",
      name: "VlDespesaAcessoriaItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalItem",
      label: "VlTotalItem",
      name: "VlTotalItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CSTICMS",
      label: "CSTICMS",
      name: "CSTICMS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSItem",
      label: "VlBaseCalculoICMSItem",
      name: "VlBaseCalculoICMSItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMS",
      label: "AliquotaICMS",
      name: "AliquotaICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSItem",
      label: "VlICMSItem",
      name: "VlICMSItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSSTItem",
      label: "VlBaseCalculoICMSSTItem",
      name: "VlBaseCalculoICMSSTItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaICMSST",
      label: "AliquotaICMSST",
      name: "AliquotaICMSST",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSSTItem",
      label: "VlICMSSTItem",
      name: "VlICMSSTItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CSTIPI",
      label: "CSTIPI",
      name: "CSTIPI",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdEnquadramentoIPI",
      label: "CdEnquadramentoIPI",
      name: "CdEnquadramentoIPI",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIPIItem",
      label: "VlBaseCalculoIPIItem",
      name: "VlBaseCalculoIPIItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaIPI",
      label: "AliquotaIPI",
      name: "AliquotaIPI",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIPIItem",
      label: "VlIPIItem",
      name: "VlIPIItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCreditoPISCOFINS",
      label: "CdCreditoPISCOFINS",
      name: "CdCreditoPISCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "IndOrigemCreditoPISCOFINS",
      label: "IndOrigemCreditoPISCOFINS",
      name: "IndOrigemCreditoPISCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdContApuradaPISCOFINS",
      label: "CdContApuradaPISCOFINS",
      name: "CdContApuradaPISCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdBaseCreditoPISCOFINS",
      label: "CdBaseCreditoPISCOFINS",
      name: "CdBaseCreditoPISCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdNaturezaPISCOFINS",
      label: "CdNaturezaPISCOFINS",
      name: "CdNaturezaPISCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CSTPIS",
      label: "CSTPIS",
      name: "CSTPIS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoPISItem",
      label: "VlBaseCalculoPISItem",
      name: "VlBaseCalculoPISItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPISItem",
      label: "VlPISItem",
      name: "VlPISItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPISSTItem",
      label: "VlPISSTItem",
      name: "VlPISSTItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CSTCOFINS",
      label: "CSTCOFINS",
      name: "CSTCOFINS",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoCOFINSItem",
      label: "VlBaseCalculoCOFINSItem",
      name: "VlBaseCalculoCOFINSItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCOFINS",
      label: "AliquotaCOFINS",
      name: "AliquotaCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCOFINSItem",
      label: "VlCOFINSItem",
      name: "VlCOFINSItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCOFINSSTItem",
      label: "VlCOFINSSTItem",
      name: "VlCOFINSSTItem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleEstoque",
      label: "ControleEstoque",
      name: "ControleEstoque",
      typeField: "int",
      size: 4,
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
