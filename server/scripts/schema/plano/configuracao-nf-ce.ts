import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNfCe extends ModelBase {
  static tableName = "ConfiguracaoNFCe";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Versao!: string;
  SiglaWS!: string;
  VersaoQRCode!: string;
  IdToken!: string;
  CSC!: string;
  SerieNotaFiscal!: string;
  Ambiente!: number;
  TipoImpressao!: string;
  TipoDanfe!: string;
  TipoEmissao!: number;
  TempoConsulta!: number;
  CertificadoNfe!: string;
  UsuarioNfe!: string;
  SenhaNfe!: string;
  ProxyNfe!: string;
  LicencaNfe!: string;
  CaminhoNfe!: string;
  FgGeraPDFDanfe!: string;
  CaminhoProcNfe!: string;
  CaminhoPDF!: string;
  FgDanfeImprimeLotes!: string;
  MensagemEmail!: string;
  MensagemContingencia!: string;
  DataHorarioContingencia!: Date;
  FgConcatenaOBSItemDanfe!: string;
  FgConcatenaOBSDanfe!: string;
  FgCancelaPorEvento!: string;
  FgImprimirTotalImpostoItem!: string;
  NumViasDanfe!: number;
  NumViasDanfeContigencia!: number;
  FgMultiplasLinhas!: string;
  UTC!: string;
  LimiteHorasCancelamento!: number;
  VlAvisoRetirada!: number;
  CdClientePadrao!: number;
  CdVendedorPadrao!: number;
  CdTipoVendaPadrao!: number;
  QuantidadePadrao!: number;
  FgInicioVenda!: string;
  FgPreVenda!: string;
  FgPreVendaSimplificada!: string;
  FgImprimeVendedorObs!: string;
  FgImprimeCodigoCliente!: string;
  FgNT201502!: string;
  FgNT201503!: string;
  QuantidadeAlerta!: number;
  QuantidadeLimite!: number;
  FgBloqueiaSangria!: string;
  FgExibeAoIniciar!: string;
  TextoAberturaVenda!: string;
  FgLetrasMaiores!: string;
  FgOcultaItensKit!: string;
  FgOcultaMensagensConfirmacao!: string;
  FgImprimeDescontoItem!: string;
  ModeloNotaFiscal!: string;
  FgPermiteSomenteNumeros!: string;
  FgImprimirOperadorCaixa!: string;
  FgExibeAltPedido!: string;
  FgLinhaUnicaItem!: string;
  FgFechamentoDinheiro!: string;
  FgFechamentoCartao!: string;
  FGNT201901!: string;
  FgCdProdutoGrid!: string;
  FgFonteMaiorGrid!: string;
  FgCPFNota!: string;
  FgNFCeDesconectada!: string;
  FgConfirmaEmissao!: string;
  FgObrigaPedido!: string;
  FgEnvioSincrono!: string;
  FgComprovanteTroca!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Versao",
      "SiglaWS",
      "VersaoQRCode",
      "IdToken",
      "CSC",
      "SerieNotaFiscal",
      "Ambiente",
      "TipoImpressao",
      "TipoDanfe",
      "TipoEmissao",
      "TempoConsulta",
      "CertificadoNfe",
      "UsuarioNfe",
      "SenhaNfe",
      "ProxyNfe",
      "LicencaNfe",
      "CaminhoNfe",
      "FgGeraPDFDanfe",
      "CaminhoProcNfe",
      "CaminhoPDF",
      "FgDanfeImprimeLotes",
      "MensagemEmail",
      "MensagemContingencia",
      "DataHorarioContingencia",
      "FgConcatenaOBSItemDanfe",
      "FgConcatenaOBSDanfe",
      "FgCancelaPorEvento",
      "FgImprimirTotalImpostoItem",
      "NumViasDanfe",
      "NumViasDanfeContigencia",
      "FgMultiplasLinhas",
      "UTC",
      "LimiteHorasCancelamento",
      "VlAvisoRetirada",
      "CdClientePadrao",
      "CdVendedorPadrao",
      "CdTipoVendaPadrao",
      "QuantidadePadrao",
      "FgInicioVenda",
      "FgPreVenda",
      "FgPreVendaSimplificada",
      "FgImprimeVendedorObs",
      "FgImprimeCodigoCliente",
      "FgNT201502",
      "FgNT201503",
      "QuantidadeAlerta",
      "QuantidadeLimite",
      "FgBloqueiaSangria",
      "FgExibeAoIniciar",
      "TextoAberturaVenda",
      "FgLetrasMaiores",
      "FgOcultaItensKit",
      "FgOcultaMensagensConfirmacao",
      "FgImprimeDescontoItem",
      "ModeloNotaFiscal",
      "FgPermiteSomenteNumeros",
      "FgImprimirOperadorCaixa",
      "FgExibeAltPedido",
      "FgLinhaUnicaItem",
      "FgFechamentoDinheiro",
      "FgFechamentoCartao",
      "FGNT201901",
      "FgCdProdutoGrid",
      "FgFonteMaiorGrid",
      "FgCPFNota",
      "FgNFCeDesconectada",
      "FgConfirmaEmissao",
      "FgObrigaPedido",
      "FgEnvioSincrono",
      "FgComprovanteTroca",
      ];
  }
}

ConfiguracaoNfCe.knex(connections.plano);

export type TConfiguracaoNfCe = ModelObject<ConfiguracaoNfCe>;
