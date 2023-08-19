import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoDuplicata extends ModelBase {
  static tableName = "ConfiguracaoDuplicata";
  static idColumn = ["TamanhoFolha"];

  TamanhoFolha!: number;
  AlturaLinha!: string;
  DiaEmissaoLinha!: number;
  DiaEmissaoColuna!: number;
  MesEmissaoColuna!: number;
  AnoEmissaoColuna!: number;
  AnoEmissaoTamanho!: number;
  FgMesExtenso!: string;
  NumFaturaLinha!: number;
  NumFaturaColuna!: number;
  NumFaturaTamanho!: number;
  ValorLinha!: number;
  ValorColuna!: number;
  ValorTamanho!: number;
  NumDuplicataLinha!: number;
  NumDuplicataColuna!: number;
  NumDuplicataTamanho!: number;
  DtVencimentoLinha!: number;
  DtVencimentoColuna!: number;
  VlDescontoLinha!: number;
  VlDescontoColuna!: number;
  VlDescontoTamanho!: number;
  DtLimiteDescontoLinha!: number;
  DtLimiteDescontoColuna!: number;
  RzSocialLinha!: number;
  RzSocialColuna!: number;
  RzSocialTamanho!: number;
  EnderecoLinha!: number;
  EnderecoColuna!: number;
  EnderecoTamanho!: number;
  BairroLinha!: number;
  BairroColuna!: number;
  BairroTamanho!: number;
  CepLinha!: number;
  CepColuna!: number;
  MunicipioLinha!: number;
  MunicipioColuna!: number;
  MunicipioTamanho!: number;
  EstadoLinha!: number;
  EstadoColuna!: number;
  EndPagamentoLinha!: number;
  EndPagamentoColuna!: number;
  EndPagamentoTamanho!: number;
  MunicipioPagamentoLinha!: number;
  MunicipioPagamentoColuna!: number;
  MunicipioPagamentoTamanho!: number;
  EstadoPagamentoLinha!: number;
  EstadoPagamentoColuna!: number;
  CNPJLinha!: number;
  CNPJColuna!: number;
  CNPJTamanho!: number;
  InscEstLinha!: number;
  InscEstColuna!: number;
  InscEstTamanho!: number;
  Extenso1Linha!: number;
  Extenso1Coluna!: number;
  Extenso1Tamanho!: number;
  Extenso2Linha!: number;
  Extenso2Coluna!: number;
  Extenso3Linha!: number;
  Extenso3Coluna!: number;
  ValorLinha1!: number;
  ValorColuna1!: number;
  ValorTamanho1!: number;
  TelefoneLinha!: number;
  TelefoneColuna!: number;
  TelefoneTamanho!: number;
  CepPagamentoLinha!: number;
  CepPagamentoColuna!: number;
  NmBancoLinha!: number;
  NmBancoColuna!: number;
  NmBancoTamanho!: number;
  BairroPagamentoLinha!: number;
  BairroPagamentoColuna!: number;
  BairroPagamentoTamanho!: number;
  FgImprimeCodCli!: string;
  

  static getFields() {
    return [
      "TamanhoFolha",
      "AlturaLinha",
      "DiaEmissaoLinha",
      "DiaEmissaoColuna",
      "MesEmissaoColuna",
      "AnoEmissaoColuna",
      "AnoEmissaoTamanho",
      "FgMesExtenso",
      "NumFaturaLinha",
      "NumFaturaColuna",
      "NumFaturaTamanho",
      "ValorLinha",
      "ValorColuna",
      "ValorTamanho",
      "NumDuplicataLinha",
      "NumDuplicataColuna",
      "NumDuplicataTamanho",
      "DtVencimentoLinha",
      "DtVencimentoColuna",
      "VlDescontoLinha",
      "VlDescontoColuna",
      "VlDescontoTamanho",
      "DtLimiteDescontoLinha",
      "DtLimiteDescontoColuna",
      "RzSocialLinha",
      "RzSocialColuna",
      "RzSocialTamanho",
      "EnderecoLinha",
      "EnderecoColuna",
      "EnderecoTamanho",
      "BairroLinha",
      "BairroColuna",
      "BairroTamanho",
      "CepLinha",
      "CepColuna",
      "MunicipioLinha",
      "MunicipioColuna",
      "MunicipioTamanho",
      "EstadoLinha",
      "EstadoColuna",
      "EndPagamentoLinha",
      "EndPagamentoColuna",
      "EndPagamentoTamanho",
      "MunicipioPagamentoLinha",
      "MunicipioPagamentoColuna",
      "MunicipioPagamentoTamanho",
      "EstadoPagamentoLinha",
      "EstadoPagamentoColuna",
      "CNPJLinha",
      "CNPJColuna",
      "CNPJTamanho",
      "InscEstLinha",
      "InscEstColuna",
      "InscEstTamanho",
      "Extenso1Linha",
      "Extenso1Coluna",
      "Extenso1Tamanho",
      "Extenso2Linha",
      "Extenso2Coluna",
      "Extenso3Linha",
      "Extenso3Coluna",
      "ValorLinha1",
      "ValorColuna1",
      "ValorTamanho1",
      "TelefoneLinha",
      "TelefoneColuna",
      "TelefoneTamanho",
      "CepPagamentoLinha",
      "CepPagamentoColuna",
      "NmBancoLinha",
      "NmBancoColuna",
      "NmBancoTamanho",
      "BairroPagamentoLinha",
      "BairroPagamentoColuna",
      "BairroPagamentoTamanho",
      "FgImprimeCodCli",
      ];
  }
}

ConfiguracaoDuplicata.knex(connections.plano);

export type TConfiguracaoDuplicata = ModelObject<ConfiguracaoDuplicata>;
