import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNFe extends ModelBase {
  static tableName = "ConfiguracaoNFe";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  Versao!: string;
  Ambiente!: number;
  TipoImpressao!: number;
  TipoEmissao!: number;
  FinalidadeEmissao!: number;
  TempoConsulta!: number;
  CaminhoNfe!: string;
  CertificadoNfe!: string;
  UsuarioNfe!: string;
  SenhaNfe!: string;
  ProxyNfe!: string;
  LicencaNfe!: string;
  CSTIPI!: number;
  CSTPIS!: number;
  CSTCOFINS!: number;
  MensagemContingencia!: string;
  DataHorarioContingencia!: Date;
  FgConcatenaOBSItemDanfe!: string;
  FgConcatenaOBSDanfe!: string;
  FgCancelaPorEvento!: string;
  CaminhoProcNfe!: string;
  CaminhoPDF!: string;
  CaminhoCartaCorrecao!: string;
  VersaoDanfe!: string;
  NumViasDanfe!: number;
  FgGeraPDFDanfe!: string;
  FgMultiplasLinhas!: string;
  SiglaWS!: string;
  FgImprimirTotalImpostoItem!: string;
  FgDanfeImprimeLotes!: string;
  UTC!: string;
  MensagemEmail!: string;
  FGNT201503!: string;
  LimiteHorasCancelamento!: number;
  FgDupMercantil!: string;
  FgParcelaDup!: string;
  FGNT201901!: string;
  FgTagIPI!: string;
  FgDanfeSimplificado!: string;
  FgNA0102!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "Versao",
      "Ambiente",
      "TipoImpressao",
      "TipoEmissao",
      "FinalidadeEmissao",
      "TempoConsulta",
      "CaminhoNfe",
      "CertificadoNfe",
      "UsuarioNfe",
      "SenhaNfe",
      "ProxyNfe",
      "LicencaNfe",
      "CSTIPI",
      "CSTPIS",
      "CSTCOFINS",
      "MensagemContingencia",
      "DataHorarioContingencia",
      "FgConcatenaOBSItemDanfe",
      "FgConcatenaOBSDanfe",
      "FgCancelaPorEvento",
      "CaminhoProcNfe",
      "CaminhoPDF",
      "CaminhoCartaCorrecao",
      "VersaoDanfe",
      "NumViasDanfe",
      "FgGeraPDFDanfe",
      "FgMultiplasLinhas",
      "SiglaWS",
      "FgImprimirTotalImpostoItem",
      "FgDanfeImprimeLotes",
      "UTC",
      "MensagemEmail",
      "FGNT201503",
      "LimiteHorasCancelamento",
      "FgDupMercantil",
      "FgParcelaDup",
      "FGNT201901",
      "FgTagIPI",
      "FgDanfeSimplificado",
      "FgNA0102",
      ];
  }
}

ConfiguracaoNFe.knex(connections.plano);

export type TConfiguracaoNFe = ModelObject<ConfiguracaoNFe>;
