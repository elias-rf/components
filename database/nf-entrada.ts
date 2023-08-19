import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class NfEntrada extends ModelBase {
  static tableName = "NfMestre";
  static idColumn = ["CdEmpresa", "NroNf", "Serie", "Modelo"];

  CdEmpresa!: number;
  NroNf!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  DtEmi!: Date;
  DtEntr!: Date;
  Nop!: number;
  NopFiscal!: number;
  TotNF!: number;
  BaseSubstituicao!: number;
  IPIBasCalc!: number;
  IPIVlr!: number;
  IPIFrete!: number;
  ICMSAliq!: number;
  ICMSBasCalc!: number;
  ICMSVlr!: number;
  ICMSRetido!: number;
  ICMSOperPropria!: number;
  ICMSFrete!: number;
  Frete!: number;
  Seguro!: number;
  DtValidacao!: Date;
  VlMercadorias!: number;
  ConPag!: string;
  Tipo!: string;
  Horario!: Date;
  FgIPICompoeBase!: string;
  VlNfComplementar!: number;
  FgIPICompoeBaseSub!: string;
  FgEstoque!: string;
  IdParametro!: number;
  GrupoFiscal!: number;
  FgConferencia!: string;
  VlRepasseICMS!: number;
  FgSomaICMSSub!: string;
  DtConferencia!: Date;
  SgUsuario!: string;
  dsObservacao!: string;
  FgUtilizaPercRedBCIcms!: string;
  VlDespAcessorias!: number;
  NumNotaRelacionada!: number;
  VlNotaRelacionada!: number;
  FgDespesasCompoeTotal!: string;
  NumChaveNfe!: string;
  FgXML!: string;
  FgGNRE!: string;
  FgStatusGNRE!: string;
  VlGNRE!: number;
  DtValidacaoNota!: Date;
  DtRecolhimentoGNRE!: Date;
  IndicadorFormaPgto!: number;
  VlPIS!: number;
  VlCofins!: number;
  VlPISSubstituido!: number;
  VlCofinsSubstituido!: number;
  FgFreteCompoeBaseICMS!: string;
  FgFreteCompoeBaseIPI!: string;
  FgFreteCompoeTotal!: string;
  FgFreteCompoeVlProdutos!: string;
  FgDespesasCompoeBaseICMS!: string;
  FgDespesasCompoeBaseIPI!: string;
  FgDespesasCompoeVlProdutos!: string;
  FgSeguroCompoeVlProdutos!: string;
  FgSeguroCompoeBaseICMS!: string;
  FgSeguroCompoeBaseIPI!: string;
  FgSeguroCompoeTotal!: string;
  NumPedido!: number;
  FgLogEtiquetasLote!: string;
  FgUtilizaVlICMSSTProdutos!: string;
  SituacaoDoc!: number;
  VlDesconto!: number;
  VlFreteConhecTransp!: number;
  NumNotaConhecTransp!: number;
  FgFreteCompoeBasePIS!: string;
  FgFreteCompoeBaseCOFINS!: string;
  VlTotalFCPST!: number;
  FgFCPSTCompoeVlTotalProdutos!: string;
  FgFCPSTCompoeVlTotalNota!: string;
  FgFCPSTCompoeVlCustoProduto!: string;

  static getFields() {
    return [
      "CdEmpresa",
      "NroNf",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "DtEmi",
      "DtEntr",
      "Nop",
      "NopFiscal",
      "TotNF",
      "BaseSubstituicao",
      "IPIBasCalc",
      "IPIVlr",
      "IPIFrete",
      "ICMSAliq",
      "ICMSBasCalc",
      "ICMSVlr",
      "ICMSRetido",
      "ICMSOperPropria",
      "ICMSFrete",
      "Frete",
      "Seguro",
      "DtValidacao",
      "VlMercadorias",
      "ConPag",
      "Tipo",
      "Horario",
      "FgIPICompoeBase",
      "VlNfComplementar",
      "FgIPICompoeBaseSub",
      "FgEstoque",
      "IdParametro",
      "GrupoFiscal",
      "FgConferencia",
      "VlRepasseICMS",
      "FgSomaICMSSub",
      "DtConferencia",
      "SgUsuario",
      "dsObservacao",
      "FgUtilizaPercRedBCIcms",
      "VlDespAcessorias",
      "NumNotaRelacionada",
      "VlNotaRelacionada",
      "FgDespesasCompoeTotal",
      "NumChaveNfe",
      "FgXML",
      "FgGNRE",
      "FgStatusGNRE",
      "VlGNRE",
      "DtValidacaoNota",
      "DtRecolhimentoGNRE",
      "IndicadorFormaPgto",
      "VlPIS",
      "VlCofins",
      "VlPISSubstituido",
      "VlCofinsSubstituido",
      "FgFreteCompoeBaseICMS",
      "FgFreteCompoeBaseIPI",
      "FgFreteCompoeTotal",
      "FgFreteCompoeVlProdutos",
      "FgDespesasCompoeBaseICMS",
      "FgDespesasCompoeBaseIPI",
      "FgDespesasCompoeVlProdutos",
      "FgSeguroCompoeVlProdutos",
      "FgSeguroCompoeBaseICMS",
      "FgSeguroCompoeBaseIPI",
      "FgSeguroCompoeTotal",
      "NumPedido",
      "FgLogEtiquetasLote",
      "FgUtilizaVlICMSSTProdutos",
      "SituacaoDoc",
      "VlDesconto",
      "VlFreteConhecTransp",
      "NumNotaConhecTransp",
      "FgFreteCompoeBasePIS",
      "FgFreteCompoeBaseCOFINS",
      "VlTotalFCPST",
      "FgFCPSTCompoeVlTotalProdutos",
      "FgFCPSTCompoeVlTotalNota",
      "FgFCPSTCompoeVlCustoProduto",
    ];
  }
}

NfEntrada.knex(connections.plano);

export type TNfEntrada = ModelObject<NfEntrada>;
