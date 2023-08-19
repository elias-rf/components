import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemNota extends ModelBase {
  static tableName = "ItemNota";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdProduto!: string;
  Sequencia!: number;
  CdProdutoAssociado!: string;
  CdRefEstoque!: string;
  Quantidade!: number;
  QtdeAtendida!: number;
  ConversaoMedida!: number;
  Correcao!: number;
  VlUnitario!: number;
  VlTotal!: number;
  PercDesconto!: number;
  VlLiquido!: number;
  VlCusto!: number;
  BaseSub!: number;
  FgEstoque!: string;
  FgKit!: string;
  FgPeso!: string;
  ImprimeComponentes!: string;
  Irrf!: number;
  MargemSub!: number;
  Peso!: string;
  PesoBruto!: number;
  PesoLiq!: number;
  ReducaoICMS!: number;
  TaxaFCA!: number;
  TipoMovimentacao!: string;
  VlComissaoPrazo!: number;
  VlComissaoVista!: number;
  CdVendedor!: number;
  CdVendedorExtra!: number;
  PercComisVista!: number;
  PercComisPrazo!: number;
  PercReducaoComissao!: number;
  VlICMS!: number;
  VlIcmsSub!: number;
  VlIPI!: number;
  VlISS!: number;
  CustoMedio!: number;
  ComplementoDescricao!: string;
  FgEtiqueta!: string;
  PercLimiteComissao!: number;
  ComplementoDesc!: string;
  BaseCalculoIPI!: number;
  NumEtiqKanBan!: number;
  NumOrdemCompra!: number;
  VlComissaoVistaExtra!: number;
  VlComissaoPrazoExtra!: number;
  DtEmissao!: Date;
  Tipo!: string;
  CRM!: string;
  Unidade!: string;
  VlImpostoDiferido!: number;
  Fg6142!: string;
  Nop!: number;
  NopFiscalItem!: number;
  fgBuscaDCB!: string;
  VlPrecoAnvisa!: number;
  AliqRedBaseST!: number;
  DescComplementarProd!: string;
  VlVendaOriginal!: number;
  SituacaoTributariaIPI!: number;
  CdEnquadramentoIPI!: string;
  AliquotaIPI!: number;
  AliquotaPIS!: number;
  VlPIS!: number;
  AliquotaCOFINS!: number;
  VlCOFINS!: number;
  SituacaoTributariaCOFINS!: number;
  BaseCalculoCOFINS!: number;
  SituacaoTributariaPIS!: number;
  BaseCalculoPIS!: number;
  AliquotaICMS!: number;
  BaseCalculoICMS!: number;
  SituacaoTributariaICMS!: number;
  FgICMSDiferimentoTotal!: string;
  CdBaseCalculoCreditoPISCOFINS!: number;
  CdTipoCreditoPISCOFINS!: number;
  CdContribuicaoApuradaPISCOFINS!: number;
  VlAproximadoImpostoItem!: number;
  VlFreteItem!: number;
  VlSeguroItem!: number;
  VlDespesaAcessoriaItem!: number;
  VlDescontoGerente!: number;
  FgConsideraItemNfe!: string;
  OrigemMercadoria!: number;
  PercentualMVA!: number;
  PercReducaoBaseSub!: number;
  PercICMSSub!: number;
  UFSub!: string;
  VlBaseCalculoICMSRetido!: number;
  VlICMSRetido!: number;
  VlBaseCalculoICMSDest!: number;
  VlICMSDest!: number;
  PercBaseOperacaoPropria!: number;
  AliquotaCreditoSimples!: number;
  VlCreditoSimples!: number;
  ModalidadeBaseICMS!: number;
  ModalidadeBaseSub!: number;
  MotivoDesoneracaoICMS!: number;
  FgEmprestimo!: string;
  PercDiferimento!: number;
  QuantidadeLitros!: number;
  VlIPILitro!: number;
  VlPISLitro!: number;
  VlCOFINSLitro!: number;
  VlAproximadoImpostoFederal!: number;
  VlAproximadoImpostoEstadual!: number;
  VlAproximadoImpostoMunicipal!: number;
  PlanoContaSped!: number;
  PercFCP!: number;
  VlBaseFCP!: number;
  VlFCP!: number;
  PercFCPST!: number;
  VlBaseFCPST!: number;
  VlFCPST!: number;
  VlBaseCalculoSTRetido!: number;
  VlICMSSTRetido!: number;
  AliquotaSTRetido!: number;
  VlICMSSubstituto!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdProduto",
      "Sequencia",
      "CdProdutoAssociado",
      "CdRefEstoque",
      "Quantidade",
      "QtdeAtendida",
      "ConversaoMedida",
      "Correcao",
      "VlUnitario",
      "VlTotal",
      "PercDesconto",
      "VlLiquido",
      "VlCusto",
      "BaseSub",
      "FgEstoque",
      "FgKit",
      "FgPeso",
      "ImprimeComponentes",
      "Irrf",
      "MargemSub",
      "Peso",
      "PesoBruto",
      "PesoLiq",
      "ReducaoICMS",
      "TaxaFCA",
      "TipoMovimentacao",
      "VlComissaoPrazo",
      "VlComissaoVista",
      "CdVendedor",
      "CdVendedorExtra",
      "PercComisVista",
      "PercComisPrazo",
      "PercReducaoComissao",
      "VlICMS",
      "VlIcmsSub",
      "VlIPI",
      "VlISS",
      "CustoMedio",
      "ComplementoDescricao",
      "FgEtiqueta",
      "PercLimiteComissao",
      "ComplementoDesc",
      "BaseCalculoIPI",
      "NumEtiqKanBan",
      "NumOrdemCompra",
      "VlComissaoVistaExtra",
      "VlComissaoPrazoExtra",
      "DtEmissao",
      "Tipo",
      "CRM",
      "Unidade",
      "VlImpostoDiferido",
      "Fg6142",
      "Nop",
      "NopFiscalItem",
      "fgBuscaDCB",
      "VlPrecoAnvisa",
      "AliqRedBaseST",
      "DescComplementarProd",
      "VlVendaOriginal",
      "SituacaoTributariaIPI",
      "CdEnquadramentoIPI",
      "AliquotaIPI",
      "AliquotaPIS",
      "VlPIS",
      "AliquotaCOFINS",
      "VlCOFINS",
      "SituacaoTributariaCOFINS",
      "BaseCalculoCOFINS",
      "SituacaoTributariaPIS",
      "BaseCalculoPIS",
      "AliquotaICMS",
      "BaseCalculoICMS",
      "SituacaoTributariaICMS",
      "FgICMSDiferimentoTotal",
      "CdBaseCalculoCreditoPISCOFINS",
      "CdTipoCreditoPISCOFINS",
      "CdContribuicaoApuradaPISCOFINS",
      "VlAproximadoImpostoItem",
      "VlFreteItem",
      "VlSeguroItem",
      "VlDespesaAcessoriaItem",
      "VlDescontoGerente",
      "FgConsideraItemNfe",
      "OrigemMercadoria",
      "PercentualMVA",
      "PercReducaoBaseSub",
      "PercICMSSub",
      "UFSub",
      "VlBaseCalculoICMSRetido",
      "VlICMSRetido",
      "VlBaseCalculoICMSDest",
      "VlICMSDest",
      "PercBaseOperacaoPropria",
      "AliquotaCreditoSimples",
      "VlCreditoSimples",
      "ModalidadeBaseICMS",
      "ModalidadeBaseSub",
      "MotivoDesoneracaoICMS",
      "FgEmprestimo",
      "PercDiferimento",
      "QuantidadeLitros",
      "VlIPILitro",
      "VlPISLitro",
      "VlCOFINSLitro",
      "VlAproximadoImpostoFederal",
      "VlAproximadoImpostoEstadual",
      "VlAproximadoImpostoMunicipal",
      "PlanoContaSped",
      "PercFCP",
      "VlBaseFCP",
      "VlFCP",
      "PercFCPST",
      "VlBaseFCPST",
      "VlFCPST",
      "VlBaseCalculoSTRetido",
      "VlICMSSTRetido",
      "AliquotaSTRetido",
      "VlICMSSubstituto",
      ];
  }
}

ItemNota.knex(connections.plano);

export type TItemNota = ModelObject<ItemNota>;
