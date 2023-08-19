import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NfItem extends ModelBase {
  static tableName = "NFItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFornecedor!: number;
  NroNF!: number;
  Serie!: string;
  Modelo!: string;
  CdProduto!: string;
  FgCusto!: string;
  FgEtiqueta!: string;
  PercICMS!: number;
  PercIPI!: number;
  Quantidade!: number;
  TipoMovimentacao!: string;
  VlAcrescItem!: number;
  VlDescItem!: number;
  VlrICMS!: number;
  VlrIPI!: number;
  VlTotItem!: number;
  CustoMedio!: number;
  TipoTributacao!: string;
  VlBaseSub!: number;
  VlICMSSub!: number;
  ICMSBasCalc!: number;
  DtEntr!: Date;
  FgEstoque!: string;
  VlRepasseICMSItem!: number;
  FgICMSJaRecolhido!: string;
  PrecPMC!: number;
  VlRelacionado!: number;
  FgCompoeBaseSub!: string;
  Nop!: number;
  NopfiscalItem!: number;
  VlBaseCalculoICMS!: number;
  VlBrutoUnitario!: number;
  VlLiquidoUnitario!: number;
  VlBaseCalculoCreditoICMS!: number;
  VlCreditoICMS!: number;
  CdBaseCalculoCreditoPISCOFINS!: number;
  CdTipoCreditoPISCOFINS!: number;
  CdContribuicaoApuradaPISCOFINS!: number;
  VlICMSSubRecolherGNRE!: number;
  PercReducaoICMS!: number;
  Sequencia!: number;
  VlBaseCalculoIPI!: number;
  SituacaoTributariaICMS!: number;
  SituacaoTributariaIPI!: number;
  OrigemMercadoria!: number;
  SituacaoTributariaPIS!: number;
  SituacaoTributariaCofins!: number;
  VlBaseCalculoPIS!: number;
  AliquotaPIS!: number;
  VlPIS!: number;
  QtdePIS!: number;
  VlPISSub!: number;
  VlBaseCalculoCofins!: number;
  AliquotaCofins!: number;
  VlCofins!: number;
  QtdeCofins!: number;
  VlCofinsSub!: number;
  VlBaseICMSManual!: string;
  VlICMSManual!: string;
  VlBaseIPIManual!: string;
  VlIPIManual!: string;
  VlBasePISManual!: string;
  VlPISManual!: string;
  VlBaseCofinsManual!: string;
  VlCofinsManual!: string;
  FgConferido!: string;
  VlFreteItem!: number;
  VlDespesaAcessoriaItem!: number;
  VlSeguroItem!: number;
  VlBaseCalculoICMSSubRecolherGNRE!: number;
  FgDesconsideraEstoque!: string;
  FgBonificacao!: string;
  VlCustoUnitario!: number;
  PlanoContaSped!: number;
  VlFCPSTItem!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFornecedor",
      "NroNF",
      "Serie",
      "Modelo",
      "CdProduto",
      "FgCusto",
      "FgEtiqueta",
      "PercICMS",
      "PercIPI",
      "Quantidade",
      "TipoMovimentacao",
      "VlAcrescItem",
      "VlDescItem",
      "VlrICMS",
      "VlrIPI",
      "VlTotItem",
      "CustoMedio",
      "TipoTributacao",
      "VlBaseSub",
      "VlICMSSub",
      "ICMSBasCalc",
      "DtEntr",
      "FgEstoque",
      "VlRepasseICMSItem",
      "FgICMSJaRecolhido",
      "PrecPMC",
      "VlRelacionado",
      "FgCompoeBaseSub",
      "Nop",
      "NopfiscalItem",
      "VlBaseCalculoICMS",
      "VlBrutoUnitario",
      "VlLiquidoUnitario",
      "VlBaseCalculoCreditoICMS",
      "VlCreditoICMS",
      "CdBaseCalculoCreditoPISCOFINS",
      "CdTipoCreditoPISCOFINS",
      "CdContribuicaoApuradaPISCOFINS",
      "VlICMSSubRecolherGNRE",
      "PercReducaoICMS",
      "Sequencia",
      "VlBaseCalculoIPI",
      "SituacaoTributariaICMS",
      "SituacaoTributariaIPI",
      "OrigemMercadoria",
      "SituacaoTributariaPIS",
      "SituacaoTributariaCofins",
      "VlBaseCalculoPIS",
      "AliquotaPIS",
      "VlPIS",
      "QtdePIS",
      "VlPISSub",
      "VlBaseCalculoCofins",
      "AliquotaCofins",
      "VlCofins",
      "QtdeCofins",
      "VlCofinsSub",
      "VlBaseICMSManual",
      "VlICMSManual",
      "VlBaseIPIManual",
      "VlIPIManual",
      "VlBasePISManual",
      "VlPISManual",
      "VlBaseCofinsManual",
      "VlCofinsManual",
      "FgConferido",
      "VlFreteItem",
      "VlDespesaAcessoriaItem",
      "VlSeguroItem",
      "VlBaseCalculoICMSSubRecolherGNRE",
      "FgDesconsideraEstoque",
      "FgBonificacao",
      "VlCustoUnitario",
      "PlanoContaSped",
      "VlFCPSTItem",
      ];
  }
}

NfItem.knex(connections.plano);

export type TNfItem = ModelObject<NfItem>;
