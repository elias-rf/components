import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNota extends ModelBase {
  static tableName = "MestreNota";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  DtEmissao!: Date;
  Tipo!: string;
  CdCliente!: number;
  CdVendedor!: number;
  FgEstatistica!: string;
  FgEstoque!: string;
  VlTotal!: number;
  VlBaseCalculo!: number;
  BaseSubstituicao!: number;
  IcmsSubstituicao!: number;
  VlIcms!: number;
  VlIRRF!: number;
  VlISS!: number;
  VlProdutos!: number;
  VlFrete!: number;
  VlSeguro!: number;
  VlAcessorias!: number;
  VlIPI!: number;
  Servico!: string;
  VlServico!: number;
  NumPedido!: number;
  OrdemCompra!: string;
  NumNotaOrigem!: number;
  DtUltAlteracao!: Date;
  Horario!: Date;
  FgRatearDescontoAcrescimo!: string;
  FgDesconto!: string;
  VlDesconto!: number;
  NumCupomFiscalOrigem!: number;
  NumPDVOrigem!: number;
  CdFilialAssociada!: number;
  CdVendedorExtra!: number;
  NotadeComplemento!: string;
  VlTroco!: number;
  VlBaseCalculoIRRF!: number;
  PercAliqIRRF!: number;
  VlBaseCalculoIN381!: number;
  PercAliqIN381!: number;
  VlIN381!: number;
  PercParticipPrazo!: number;
  PercParticipVista!: number;
  RedutorComissao!: number;
  GrupoFiscal!: number;
  CdTipoVenda!: number;
  CdFuncionario!: number;
  CdUsuario!: string;
  Nop!: number;
  NopFiscal!: number;
  VlImpostoDiferido!: number;
  CdLocalEstoque!: number;
  Modelo!: string;
  VlIPIFrete!: number;
  VlBaseCalculoII!: number;
  VlII!: number;
  DtSaida!: Date;
  VlBaseCalculoIPI!: number;
  VlPISSubstituido!: number;
  VlCofinsSubstituido!: number;
  VlBaseCalculoPIS!: number;
  VlPIS!: number;
  VlBaseCalculoCOFINS!: number;
  VlCofins!: number;
  VlAproximadoImpostoNota!: number;
  CdSituacaoDocumento!: string;
  SerieNotaOrigem!: string;
  ModeloNotaOrigem!: string;
  VlDeducaoFiscal!: number;
  DescricaoNop!: string;
  TipoNota!: string;
  IndicadorFormaPgto!: number;
  FinalidadeNf!: string;
  FgVendaConsumidor!: string;
  FgDiferencialAliquota!: string;
  SituacaoNfe!: string;
  AmbienteNfe!: number;
  NumOrdemFaturamento!: number;
  FgImportacao!: string;
  IndicadorPresenca!: string;
  FgNfTerceiros!: string;
  VlAproximadoImpostoFederal!: number;
  VlAproximadoImpostoEstadual!: number;
  VlAproximadoImpostoMunicipal!: number;
  VlFCP!: number;
  VlFCPST!: number;
  NomeAdquirente!: string;
  CPFCNPJAdquirente!: number;
  percComissao!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "DtEmissao",
      "Tipo",
      "CdCliente",
      "CdVendedor",
      "FgEstatistica",
      "FgEstoque",
      "VlTotal",
      "VlBaseCalculo",
      "BaseSubstituicao",
      "IcmsSubstituicao",
      "VlIcms",
      "VlIRRF",
      "VlISS",
      "VlProdutos",
      "VlFrete",
      "VlSeguro",
      "VlAcessorias",
      "VlIPI",
      "Servico",
      "VlServico",
      "NumPedido",
      "OrdemCompra",
      "NumNotaOrigem",
      "DtUltAlteracao",
      "Horario",
      "FgRatearDescontoAcrescimo",
      "FgDesconto",
      "VlDesconto",
      "NumCupomFiscalOrigem",
      "NumPDVOrigem",
      "CdFilialAssociada",
      "CdVendedorExtra",
      "NotadeComplemento",
      "VlTroco",
      "VlBaseCalculoIRRF",
      "PercAliqIRRF",
      "VlBaseCalculoIN381",
      "PercAliqIN381",
      "VlIN381",
      "PercParticipPrazo",
      "PercParticipVista",
      "RedutorComissao",
      "GrupoFiscal",
      "CdTipoVenda",
      "CdFuncionario",
      "CdUsuario",
      "Nop",
      "NopFiscal",
      "VlImpostoDiferido",
      "CdLocalEstoque",
      "Modelo",
      "VlIPIFrete",
      "VlBaseCalculoII",
      "VlII",
      "DtSaida",
      "VlBaseCalculoIPI",
      "VlPISSubstituido",
      "VlCofinsSubstituido",
      "VlBaseCalculoPIS",
      "VlPIS",
      "VlBaseCalculoCOFINS",
      "VlCofins",
      "VlAproximadoImpostoNota",
      "CdSituacaoDocumento",
      "SerieNotaOrigem",
      "ModeloNotaOrigem",
      "VlDeducaoFiscal",
      "DescricaoNop",
      "TipoNota",
      "IndicadorFormaPgto",
      "FinalidadeNf",
      "FgVendaConsumidor",
      "FgDiferencialAliquota",
      "SituacaoNfe",
      "AmbienteNfe",
      "NumOrdemFaturamento",
      "FgImportacao",
      "IndicadorPresenca",
      "FgNfTerceiros",
      "VlAproximadoImpostoFederal",
      "VlAproximadoImpostoEstadual",
      "VlAproximadoImpostoMunicipal",
      "VlFCP",
      "VlFCPST",
      "NomeAdquirente",
      "CPFCNPJAdquirente",
      "percComissao",
      ];
  }
}

MestreNota.knex(connections.plano);

export type TMestreNota = ModelObject<MestreNota>;
