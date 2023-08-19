import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNfCeSat extends ModelBase {
  static tableName = "ConfiguracaoNFCeSAT";
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
  CodigoVinculacao!: string;
  CodigoAtivacao!: string;
  CaminhoNfe!: string;
  FgGeraPDFDanfe!: string;
  CaminhoProcNfe!: string;
  CaminhoPDF!: string;
  FgDanfeImprimeLotes!: string;
  MensagemEmail!: string;
  FgConcatenaOBSItemDanfe!: string;
  FgConcatenaOBSDanfe!: string;
  FgImprimirTotalImpostoItem!: string;
  NumViasDanfe!: number;
  FgMultiplasLinhas!: string;
  LimiteHorasCancelamento!: number;
  VlAvisoRetirada!: number;
  CdClientePadrao!: number;
  CdVendedorPadrao!: number;
  CdTipoVendaPadrao!: number;
  QuantidadePadrao!: number;
  FgInicioVenda!: string;
  FgPreVenda!: string;
  FgPreVendaSimplificada!: string;
  QuantidadeLimite!: number;
  QuantidadeAlerta!: number;
  NumSerieSAT!: string;
  

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
      "CodigoVinculacao",
      "CodigoAtivacao",
      "CaminhoNfe",
      "FgGeraPDFDanfe",
      "CaminhoProcNfe",
      "CaminhoPDF",
      "FgDanfeImprimeLotes",
      "MensagemEmail",
      "FgConcatenaOBSItemDanfe",
      "FgConcatenaOBSDanfe",
      "FgImprimirTotalImpostoItem",
      "NumViasDanfe",
      "FgMultiplasLinhas",
      "LimiteHorasCancelamento",
      "VlAvisoRetirada",
      "CdClientePadrao",
      "CdVendedorPadrao",
      "CdTipoVendaPadrao",
      "QuantidadePadrao",
      "FgInicioVenda",
      "FgPreVenda",
      "FgPreVendaSimplificada",
      "QuantidadeLimite",
      "QuantidadeAlerta",
      "NumSerieSAT",
      ];
  }
}

ConfiguracaoNfCeSat.knex(connections.plano);

export type TConfiguracaoNfCeSat = ModelObject<ConfiguracaoNfCeSat>;
