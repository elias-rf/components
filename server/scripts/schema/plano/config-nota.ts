import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigNota extends ModelBase {
  static tableName = "ConfigNota";
  static idColumn = [];

  Serie!: string;
  AlturaFormulario!: number;
  AliqICMSColuna!: number;
  AliqICMSTamanho!: number;
  BairroColuna!: number;
  BairroTamanho!: number;
  BaseCalcICMSColuna!: number;
  BaseCalcICMSLinha!: number;
  BaseCalcICMSTamanho!: number;
  BaseSubColuna!: number;
  BaseSubTamanho!: number;
  CdProdutoColuna!: number;
  CdProdutoLinha!: number;
  CdProdutoTamanho!: number;
  CepColuna!: number;
  CFOPColuna!: number;
  CFOPLinha!: number;
  ClasFiscalColuna!: number;
  ClasFiscalTamanho!: number;
  CNPJColuna!: number;
  CNPJTransportadorColuna!: number;
  DescNopColuna!: number;
  DescNopTamanho!: number;
  DescricaoColuna!: number;
  DescricaoTamanho!: number;
  DtEmissaoColuna!: number;
  DtSaidaColuna!: number;
  EnderecoColuna!: number;
  EnderecoLinha!: number;
  EnderecoTamanho!: number;
  EndTransportadorColuna!: number;
  EndTransportadorLinha!: number;
  EndTransportadorTamanho!: number;
  EntradaColuna!: number;
  EspecieColuna!: number;
  EspecieTamanho!: number;
  FaturaColuna!: number;
  FaturaLinha!: number;
  FaturaNumLinhas!: number;
  FaturaNumParcelas!: number;
  FaturaEspacos!: number;
  FaturaTamanho!: number;
  FaturaValorColuna!: number;
  FaturaValorTamanho!: number;
  FaturaVctoColuna!: number;
  FaturaVctoTamanho!: number;
  HorarioColuna!: number;
  InfAdicionaisColuna!: number;
  InfAdicionaisLinha!: number;
  InfAdicionaisTamanho!: number;
  InscEstColuna!: number;
  InscEstTransportadorColuna!: number;
  MarcaColuna!: number;
  MarcaTamanho!: number;
  MunicipioColuna!: number;
  MunicipioLinha!: number;
  MunicipioTamanho!: number;
  MunicipioTransportadorColuna!: number;
  MunicipioTransportadorTamanho!: number;
  NmTransportadorColuna!: number;
  NmTransportadorLinha!: number;
  NmTransportadorTamanho!: number;
  NumeroColuna!: number;
  NumeroTamanho!: number;
  NumLinhasInfAdicionais!: number;
  NumNotaCabColuna!: number;
  NumNotaCabLinha!: number;
  NumNotaRodapeColuna!: number;
  NumNotaRodapeLinha!: number;
  PesoBrutoColuna!: number;
  PesoBrutoTamanho!: number;
  PesoLiquidoColuna!: number;
  PesoLiquidoTamanho!: number;
  PlacaTamanho!: number;
  PlacaColuna!: number;
  QtdeLinhasProduto!: number;
  QtdeVolumeColuna!: number;
  QtdeVolumeLinha!: number;
  QtdeVolumeTamanho!: number;
  QuantidadeColuna!: number;
  QuantidadeTamanho!: number;
  RzSocialColuna!: number;
  RzSocialLinha!: number;
  RzSocialTamanho!: number;
  SaidaColuna!: number;
  SitTributariaColuna!: number;
  SitTributariaTamanho!: number;
  TelefoneColuna!: number;
  TelefoneTamanho!: number;
  TipoFreteColuna!: number;
  UFColuna!: number;
  UFPlacaColuna!: number;
  UFTransportadorColuna!: number;
  UnidadeColuna!: number;
  UnidadeTamanho!: number;
  VlDescontoLinha!: number;
  VlDescontoColuna!: number;
  VlDescontoTamanho!: number;
  VlDespesasColuna!: number;
  VlDespesasTamanho!: number;
  VlFreteColuna!: number;
  VlFreteLinha!: number;
  VlFreteTamanho!: number;
  VlICMSColuna!: number;
  VlICMSTamanho!: number;
  VlICMSSubColuna!: number;
  VlICMSSubTamanho!: number;
  VlIPIColuna!: number;
  VlIPITamanho!: number;
  VlProdutosColuna!: number;
  VlProdutosTamanho!: number;
  VlSeguroColuna!: number;
  VlSeguroTamanho!: number;
  VlTotalColuna!: number;
  VlTotalNotaColuna!: number;
  VlTotalNotaTamanho!: number;
  VlTotalTamanho!: number;
  VlUnitarioColuna!: number;
  VlUnitarioTamanho!: number;
  FonteCabecalho!: number;
  FonteProdutos!: number;
  FonteTotais!: number;
  FonteTransportador!: number;
  FonteFaturas!: number;
  FonteInfAdicionais!: number;
  FonteServicos!: number;
  CdServicoLinha!: number;
  QtdeLinhasServico!: number;
  CdServicoColuna!: number;
  CdServicoTamanho!: number;
  DescricaoServicoLinha!: number;
  DescricaoServicoColuna!: number;
  DescricaoServicoTamanho!: number;
  QuantidadeServicoColuna!: number;
  QuantidadeServicoTamanho!: number;
  VlUnitarioServicoColuna!: number;
  VlUnitarioServicoTamanho!: number;
  VlTotalServicoColuna!: number;
  VlTotalServicoTamanho!: number;
  VlServicoLinha!: number;
  VlServicoColuna!: number;
  VlServicoTamanho!: number;
  AliquotaISSLinha!: number;
  AliquotaISSColuna!: number;
  AliquotaISSTamanho!: number;
  VlIssLinha!: number;
  VlISSColuna!: number;
  VlISSTamanho!: number;
  EmissaoRodapeColuna!: number;
  EmissaoRodapeTamanho!: number;
  FgImprimeLoteProdutos!: string;
  FaturaValorExtensoLinha!: number;
  FaturaValorExtensoColuna!: number;
  FaturaValorExtensoTamanho!: number;
  Modelo!: string;
  CdFilial!: number;
  AliqIPIColuna!: number;
  AliqIPITamanho!: number;
  VlIPIItemColuna!: number;
  VlIPIItemTamanho!: number;
  FaturaPracaPagamentoLinha!: number;
  FaturaPracaPagamentoTamanho!: number;
  FaturaPracaPagamentoColuna!: number;
  BaseISSLinha!: number;
  BaseISSColuna!: number;
  BaseISSTamanho!: number;
  InscMunicipalLinha!: number;
  InscMunicipalColuna!: number;
  InscMunicipalTamanho!: number;
  DecimaisValorProduto!: number;
  DecimaisAliqIPI!: number;
  DecimaisAliqICMS!: number;
  RzSocialFilialLinha!: number;
  RzSocialFilialColuna!: number;
  RzSocialFilialTamanho!: number;
  EnderecoFilialLinha!: number;
  EnderecoFilialColuna!: number;
  EnderecoFilialTamanho!: number;
  CNPJFilialLinha!: number;
  CNPJFilialColuna!: number;
  CNPJFilialTamanho!: number;
  TelefoneFilialLinha!: number;
  TelefoneFilialColuna!: number;
  TelefoneFilialTamanho!: number;
  NumNotaCompLinha!: number;
  NumNotaCompColuna!: number;
  FgDestacaNumNotaCabecalho!: string;
  FgDestacaNumNotaRodape!: string;
  FgConfirmaSaltoPagina!: string;
  FonteNumNotaCabecalho!: number;
  FonteNumNotaRodape!: number;
  BaseCalcPISLinha!: number;
  BaseCalcPISColuna!: number;
  BaseCalcPISTamanho!: number;
  AliquotaPISLinha!: number;
  AliquotaPISColuna!: number;
  AliquotaPISTamanho!: number;
  VlPISLinha!: number;
  VlPISColuna!: number;
  VlPISTamanho!: number;
  BaseCalcCOFINSLinha!: number;
  BaseCalcCOFINSColuna!: number;
  BaseCalcCOFINSTamanho!: number;
  AliquotaCOFINSLinha!: number;
  AliquotaCOFINSColuna!: number;
  AliquotaCOFINSTamanho!: number;
  VlCOFINSLinha!: number;
  VlCOFINSColuna!: number;
  VlCOFINSTamanho!: number;
  BaseCalcIRRFLinha!: number;
  BaseCalcIRRFColuna!: number;
  BaseCalcIRRFTamanho!: number;
  AliquotaIRRFLinha!: number;
  AliquotaIRRFColuna!: number;
  AliquotaIRRFTamanho!: number;
  VlIRRFLinha!: number;
  VlIRRFColuna!: number;
  VlIRRFTamanho!: number;
  BaseCalcCSLLLinha!: number;
  BaseCalcCSLLColuna!: number;
  BaseCalcCSLLTamanho!: number;
  AliquotaCSLLLinha!: number;
  AliquotaCSLLColuna!: number;
  AliquotaCSLLTamanho!: number;
  VlCSLLLinha!: number;
  VlCSLLColuna!: number;
  VlCSLLTamanho!: number;
  

  static getFields() {
    return [
      "Serie",
      "AlturaFormulario",
      "AliqICMSColuna",
      "AliqICMSTamanho",
      "BairroColuna",
      "BairroTamanho",
      "BaseCalcICMSColuna",
      "BaseCalcICMSLinha",
      "BaseCalcICMSTamanho",
      "BaseSubColuna",
      "BaseSubTamanho",
      "CdProdutoColuna",
      "CdProdutoLinha",
      "CdProdutoTamanho",
      "CepColuna",
      "CFOPColuna",
      "CFOPLinha",
      "ClasFiscalColuna",
      "ClasFiscalTamanho",
      "CNPJColuna",
      "CNPJTransportadorColuna",
      "DescNopColuna",
      "DescNopTamanho",
      "DescricaoColuna",
      "DescricaoTamanho",
      "DtEmissaoColuna",
      "DtSaidaColuna",
      "EnderecoColuna",
      "EnderecoLinha",
      "EnderecoTamanho",
      "EndTransportadorColuna",
      "EndTransportadorLinha",
      "EndTransportadorTamanho",
      "EntradaColuna",
      "EspecieColuna",
      "EspecieTamanho",
      "FaturaColuna",
      "FaturaLinha",
      "FaturaNumLinhas",
      "FaturaNumParcelas",
      "FaturaEspacos",
      "FaturaTamanho",
      "FaturaValorColuna",
      "FaturaValorTamanho",
      "FaturaVctoColuna",
      "FaturaVctoTamanho",
      "HorarioColuna",
      "InfAdicionaisColuna",
      "InfAdicionaisLinha",
      "InfAdicionaisTamanho",
      "InscEstColuna",
      "InscEstTransportadorColuna",
      "MarcaColuna",
      "MarcaTamanho",
      "MunicipioColuna",
      "MunicipioLinha",
      "MunicipioTamanho",
      "MunicipioTransportadorColuna",
      "MunicipioTransportadorTamanho",
      "NmTransportadorColuna",
      "NmTransportadorLinha",
      "NmTransportadorTamanho",
      "NumeroColuna",
      "NumeroTamanho",
      "NumLinhasInfAdicionais",
      "NumNotaCabColuna",
      "NumNotaCabLinha",
      "NumNotaRodapeColuna",
      "NumNotaRodapeLinha",
      "PesoBrutoColuna",
      "PesoBrutoTamanho",
      "PesoLiquidoColuna",
      "PesoLiquidoTamanho",
      "PlacaTamanho",
      "PlacaColuna",
      "QtdeLinhasProduto",
      "QtdeVolumeColuna",
      "QtdeVolumeLinha",
      "QtdeVolumeTamanho",
      "QuantidadeColuna",
      "QuantidadeTamanho",
      "RzSocialColuna",
      "RzSocialLinha",
      "RzSocialTamanho",
      "SaidaColuna",
      "SitTributariaColuna",
      "SitTributariaTamanho",
      "TelefoneColuna",
      "TelefoneTamanho",
      "TipoFreteColuna",
      "UFColuna",
      "UFPlacaColuna",
      "UFTransportadorColuna",
      "UnidadeColuna",
      "UnidadeTamanho",
      "VlDescontoLinha",
      "VlDescontoColuna",
      "VlDescontoTamanho",
      "VlDespesasColuna",
      "VlDespesasTamanho",
      "VlFreteColuna",
      "VlFreteLinha",
      "VlFreteTamanho",
      "VlICMSColuna",
      "VlICMSTamanho",
      "VlICMSSubColuna",
      "VlICMSSubTamanho",
      "VlIPIColuna",
      "VlIPITamanho",
      "VlProdutosColuna",
      "VlProdutosTamanho",
      "VlSeguroColuna",
      "VlSeguroTamanho",
      "VlTotalColuna",
      "VlTotalNotaColuna",
      "VlTotalNotaTamanho",
      "VlTotalTamanho",
      "VlUnitarioColuna",
      "VlUnitarioTamanho",
      "FonteCabecalho",
      "FonteProdutos",
      "FonteTotais",
      "FonteTransportador",
      "FonteFaturas",
      "FonteInfAdicionais",
      "FonteServicos",
      "CdServicoLinha",
      "QtdeLinhasServico",
      "CdServicoColuna",
      "CdServicoTamanho",
      "DescricaoServicoLinha",
      "DescricaoServicoColuna",
      "DescricaoServicoTamanho",
      "QuantidadeServicoColuna",
      "QuantidadeServicoTamanho",
      "VlUnitarioServicoColuna",
      "VlUnitarioServicoTamanho",
      "VlTotalServicoColuna",
      "VlTotalServicoTamanho",
      "VlServicoLinha",
      "VlServicoColuna",
      "VlServicoTamanho",
      "AliquotaISSLinha",
      "AliquotaISSColuna",
      "AliquotaISSTamanho",
      "VlIssLinha",
      "VlISSColuna",
      "VlISSTamanho",
      "EmissaoRodapeColuna",
      "EmissaoRodapeTamanho",
      "FgImprimeLoteProdutos",
      "FaturaValorExtensoLinha",
      "FaturaValorExtensoColuna",
      "FaturaValorExtensoTamanho",
      "Modelo",
      "CdFilial",
      "AliqIPIColuna",
      "AliqIPITamanho",
      "VlIPIItemColuna",
      "VlIPIItemTamanho",
      "FaturaPracaPagamentoLinha",
      "FaturaPracaPagamentoTamanho",
      "FaturaPracaPagamentoColuna",
      "BaseISSLinha",
      "BaseISSColuna",
      "BaseISSTamanho",
      "InscMunicipalLinha",
      "InscMunicipalColuna",
      "InscMunicipalTamanho",
      "DecimaisValorProduto",
      "DecimaisAliqIPI",
      "DecimaisAliqICMS",
      "RzSocialFilialLinha",
      "RzSocialFilialColuna",
      "RzSocialFilialTamanho",
      "EnderecoFilialLinha",
      "EnderecoFilialColuna",
      "EnderecoFilialTamanho",
      "CNPJFilialLinha",
      "CNPJFilialColuna",
      "CNPJFilialTamanho",
      "TelefoneFilialLinha",
      "TelefoneFilialColuna",
      "TelefoneFilialTamanho",
      "NumNotaCompLinha",
      "NumNotaCompColuna",
      "FgDestacaNumNotaCabecalho",
      "FgDestacaNumNotaRodape",
      "FgConfirmaSaltoPagina",
      "FonteNumNotaCabecalho",
      "FonteNumNotaRodape",
      "BaseCalcPISLinha",
      "BaseCalcPISColuna",
      "BaseCalcPISTamanho",
      "AliquotaPISLinha",
      "AliquotaPISColuna",
      "AliquotaPISTamanho",
      "VlPISLinha",
      "VlPISColuna",
      "VlPISTamanho",
      "BaseCalcCOFINSLinha",
      "BaseCalcCOFINSColuna",
      "BaseCalcCOFINSTamanho",
      "AliquotaCOFINSLinha",
      "AliquotaCOFINSColuna",
      "AliquotaCOFINSTamanho",
      "VlCOFINSLinha",
      "VlCOFINSColuna",
      "VlCOFINSTamanho",
      "BaseCalcIRRFLinha",
      "BaseCalcIRRFColuna",
      "BaseCalcIRRFTamanho",
      "AliquotaIRRFLinha",
      "AliquotaIRRFColuna",
      "AliquotaIRRFTamanho",
      "VlIRRFLinha",
      "VlIRRFColuna",
      "VlIRRFTamanho",
      "BaseCalcCSLLLinha",
      "BaseCalcCSLLColuna",
      "BaseCalcCSLLTamanho",
      "AliquotaCSLLLinha",
      "AliquotaCSLLColuna",
      "AliquotaCSLLTamanho",
      "VlCSLLLinha",
      "VlCSLLColuna",
      "VlCSLLTamanho",
      ];
  }
}

ConfigNota.knex(connections.plano);

export type TConfigNota = ModelObject<ConfigNota>;
