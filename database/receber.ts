import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Receber extends ModelBase {
  static tableName = "TitCobr";
  static idColumn = ["CdFilial", "NrDoc", "Serie", "Modelo", "ItemDoc"];

  CdFilial!: number;
  NrDoc!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  CdAgencia!: number;
  CdAgenciaCliente!: number;
  CdBanco!: number;
  CdBancoCliente!: number;
  CdCliente!: number;
  CdFuncionario!: number;
  DaEmissao!: Date;
  DaLimDesconto!: Date;
  DaLiqCanc!: Date;
  DaRemCob!: Date;
  DaVencto!: Date;
  DtUltAlteracao!: Date;
  FgBloqueto!: string;
  FgCobranca!: string;
  FgDuplicata!: string;
  FgFatura!: string;
  FgSituacao!: string;
  Motivo!: string;
  NmCartao!: string;
  NossoNr!: string;
  NossoNumero!: number;
  NumCheque!: number;
  NumConta!: string;
  SgFormaCob!: string;
  VlAmortizado!: number;
  VlDescNegociado!: number;
  VlDesconto!: number;
  VlEstorno!: number;
  VlJuroDiaAtr!: number;
  VlTitulo!: number;
  FgTipoCarteira!: string;
  FgAceite!: string;
  PracaCompensacao!: number;
  NumPDV!: number;
  PrazoCompensacao!: number;
  DtCancelamento!: Date;
  CdVendedor!: number;
  CdDepositario!: number;
  NumMapaEntrega!: number;
  DtAcertoMapaEntrega!: Date;
  CdCarteira!: number;
  CdComprador!: number;
  FgReceita!: string;
  NumPedido!: number;
  SeqCaixa!: number;
  TarjaCheque!: string;
  NumAutCartao!: number;
  CdVendedorExtra!: number;
  NumeroFatura!: number;
  TipoDocFatura!: string;
  PercMultaAtraso!: number;
  Usuario!: string;
  TipoOperacaoCartao!: string;
  OrigemLancamento!: string;
  VlJuros!: number;
  FgCompensar!: string;
  DtUltimoEnvioEmailCR!: Date;
  FgEmailAVencer!: string;
  NSU!: string;

  static getFields() {
    return [
      "CdFilial",
      "NrDoc",
      "Serie",
      "Modelo",
      "SiglaDoc",
      "ItemDoc",
      "CdAgencia",
      "CdAgenciaCliente",
      "CdBanco",
      "CdBancoCliente",
      "CdCliente",
      "CdFuncionario",
      "DaEmissao",
      "DaLimDesconto",
      "DaLiqCanc",
      "DaRemCob",
      "DaVencto",
      "DtUltAlteracao",
      "FgBloqueto",
      "FgCobranca",
      "FgDuplicata",
      "FgFatura",
      "FgSituacao",
      "Motivo",
      "NmCartao",
      "NossoNr",
      "NossoNumero",
      "NumCheque",
      "NumConta",
      "SgFormaCob",
      "VlAmortizado",
      "VlDescNegociado",
      "VlDesconto",
      "VlEstorno",
      "VlJuroDiaAtr",
      "VlTitulo",
      "FgTipoCarteira",
      "FgAceite",
      "PracaCompensacao",
      "NumPDV",
      "PrazoCompensacao",
      "DtCancelamento",
      "CdVendedor",
      "CdDepositario",
      "NumMapaEntrega",
      "DtAcertoMapaEntrega",
      "CdCarteira",
      "CdComprador",
      "FgReceita",
      "NumPedido",
      "SeqCaixa",
      "TarjaCheque",
      "NumAutCartao",
      "CdVendedorExtra",
      "NumeroFatura",
      "TipoDocFatura",
      "PercMultaAtraso",
      "Usuario",
      "TipoOperacaoCartao",
      "OrigemLancamento",
      "VlJuros",
      "FgCompensar",
      "DtUltimoEnvioEmailCR",
      "FgEmailAVencer",
      "NSU",
    ];
  }
}

Receber.knex(connections.plano);

export type TReceber = ModelObject<Receber>;
