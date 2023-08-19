import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Parametros extends ModelBase {
  static tableName = "Parametros";
  static idColumn = [];

  Arredondamento!: string;
  CdFilial!: number;
  CdGerente!: number;
  CdOperador!: string;
  Chorao!: string;
  DtAbertura!: Date;
  DtUltimaExportacao!: Date;
  DtUltimaImportacao!: Date;
  DtUltimaMovimentacao!: Date;
  Ean!: string;
  Exportacao!: string;
  Extrato!: string;
  FgGravaTipo!: string;
  FgTransPrecoBruto!: string;
  Figura!: string;
  Fonte!: number;
  Gaveta!: number;
  Identificador!: number;
  Importacao!: string;
  Impressora!: string;
  LoTipo!: string;
  MultiplosCheques!: string;
  NrRemessaBco!: number;
  NumCupom!: number;
  Porta!: number;
  PrimeiraSequencia!: number;
  PrimeiroCupom!: number;
  QtdePadrao!: number;
  SangriaMaxima!: number;
  SangriaMinima!: number;
  Scanner!: number;
  T0!: number;
  T01!: number;
  T02!: number;
  T03!: number;
  T04!: number;
  T05!: number;
  T06!: number;
  T07!: number;
  T08!: number;
  T09!: number;
  T10!: number;
  T11!: number;
  T12!: number;
  TamFormulario!: number;
  TamMensagem1!: number;
  TamMensagem2!: number;
  TamMensagem3!: number;
  UltCupom!: number;
  Utilizacao!: string;
  Vendedor!: string;
  VersaoImpressora!: number;
  ResumoDepto!: string;
  ResumoCaixa!: string;
  ResumoMovimento!: string;
  ResumoHora!: string;
  MovimentoCaixa!: string;
  MovimentoVendedor!: string;
  VisualizaObs!: string;
  Decodificador!: string;
  AcumuladorPadrao!: string;
  FgNumSequencial!: string;
  Mensagem1!: string;
  Mensagem2!: string;
  Mensagem3!: string;
  FgImpLocalEntrega!: string;
  AcServicos!: string;
  QtdadeCupomVinculado!: number;
  CdTipoVendaPadrao!: number;
  CdClientePadrao!: number;
  CdVendedorPadrao!: number;
  FgSetor!: string;
  FgTrocaTipoVendaPed!: string;
  FgCancelaCupom!: string;
  FgTermica!: string;
  FgAberturaLogon!: string;
  AcServicos2!: string;
  FgVerificaReducaoImpressora!: string;
  

  static getFields() {
    return [
      "Arredondamento",
      "CdFilial",
      "CdGerente",
      "CdOperador",
      "Chorao",
      "DtAbertura",
      "DtUltimaExportacao",
      "DtUltimaImportacao",
      "DtUltimaMovimentacao",
      "Ean",
      "Exportacao",
      "Extrato",
      "FgGravaTipo",
      "FgTransPrecoBruto",
      "Figura",
      "Fonte",
      "Gaveta",
      "Identificador",
      "Importacao",
      "Impressora",
      "LoTipo",
      "MultiplosCheques",
      "NrRemessaBco",
      "NumCupom",
      "Porta",
      "PrimeiraSequencia",
      "PrimeiroCupom",
      "QtdePadrao",
      "SangriaMaxima",
      "SangriaMinima",
      "Scanner",
      "T0",
      "T01",
      "T02",
      "T03",
      "T04",
      "T05",
      "T06",
      "T07",
      "T08",
      "T09",
      "T10",
      "T11",
      "T12",
      "TamFormulario",
      "TamMensagem1",
      "TamMensagem2",
      "TamMensagem3",
      "UltCupom",
      "Utilizacao",
      "Vendedor",
      "VersaoImpressora",
      "ResumoDepto",
      "ResumoCaixa",
      "ResumoMovimento",
      "ResumoHora",
      "MovimentoCaixa",
      "MovimentoVendedor",
      "VisualizaObs",
      "Decodificador",
      "AcumuladorPadrao",
      "FgNumSequencial",
      "Mensagem1",
      "Mensagem2",
      "Mensagem3",
      "FgImpLocalEntrega",
      "AcServicos",
      "QtdadeCupomVinculado",
      "CdTipoVendaPadrao",
      "CdClientePadrao",
      "CdVendedorPadrao",
      "FgSetor",
      "FgTrocaTipoVendaPed",
      "FgCancelaCupom",
      "FgTermica",
      "FgAberturaLogon",
      "AcServicos2",
      "FgVerificaReducaoImpressora",
      ];
  }
}

Parametros.knex(connections.plano);

export type TParametros = ModelObject<Parametros>;
