import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Pedido extends ModelBase {
  static tableName = "MestrePedido";
  static idColumn = ["CdEmitente", "CdFilial"];

  CdEmitente!: number;
  CdFilial!: number;
  CdTipoVenda!: number;
  CdTransportadora!: number;
  CdVendedor!: number;
  ComboFilial!: number;
  CondFaturamento!: string;
  CondPgto!: string;
  DtColocacao!: Date;
  DtEmissao!: Date;
  DtEntrega!: Date;
  FgSituacao!: string;
  FgSomaIPI!: string;
  FgVendaFilial!: string;
  Garantia!: string;
  Horario!: Date;
  NmConfirmacao!: string;
  NmFavorecido!: string;
  Nop!: number;
  NumPedido!: number;
  NumPedidoEmitente!: string;
  NumRecibo!: number;
  Obs!: string;
  Op_Transferencia!: string;
  PercAcrescimo!: number;
  PercComissaoPrazo!: number;
  PercComissaoVista!: number;
  PercDesconto!: number;
  Tipo!: string;
  TipoFrete!: string;
  Validade!: string;
  VlAcrescimo!: number;
  VlDesconto!: number;
  VlPago!: number;
  VlTotal!: number;
  CdSetor!: number;
  FgPreVenda!: string;
  HrEntrega!: Date;
  ModeloPedido!: string;
  CdStatus!: number;
  VlFrete!: number;
  DtUltAlteracao!: Date;
  CdCondPagtoChe!: number;
  CdTipoEntrega!: number;
  CdCondPagto!: number;
  HrEntregaIni!: Date;
  HrEntregaFim!: Date;
  VlTaxaEntrega!: number;
  CdVendedorExtra!: number;
  PercComissaoVistaExtra!: number;
  PercComissaoPrazoExtra!: number;
  CdMatriculaVMS!: string;
  NSU!: string;
  VlCreditoVMS!: number;
  OperadoraVMS!: string;
  FgEnvioCaneta!: string;
  NmPaciente!: string;
  CdProjeto!: number;
  CdLocalEstoque!: number;
  FgStatusOrdem!: string;
  FgConferencia!: string;
  Contato!: string;
  Departamento!: string;
  AssisTecnica!: string;
  PrazoEntrega!: string;
  FgRateio!: string;
  CondPagamentoIni!: number;
  FgEndComercial!: string;
  CdClienteImpressao!: number;
  NumPedidoOriginal!: number;
  FgBuscaReceita!: string;
  FgVendaConsultorio!: string;
  DestinoMaterial!: string;
  VlIPIFrete!: number;
  FgObrigaNotaFiscal!: string;
  NumECFCupomVinculado!: number;
  NumCOOCupomVinculado!: number;
  NumCOODAV!: number;
  NumSerieECF!: string;
  CNPJCPFAdquirente!: number;
  ControleNum!: number;
  LocalEntregaAnterior!: string;
  ProximidadesAnterior!: string;
  Usuario!: string;
  NumPlaca!: string;
  FgEntregaFutura!: string;
  VlSeguro!: number;
  VlDespesasAcessorias!: number;
  FgImprimePedidoSemVlUnitario!: string;
  VlTotalPesoBruto!: number;
  VlDescontoCombo!: number;

  static getFields() {
    return [
      "CdEmitente",
      "CdFilial",
      "CdTipoVenda",
      "CdTransportadora",
      "CdVendedor",
      "ComboFilial",
      "CondFaturamento",
      "CondPgto",
      "DtColocacao",
      "DtEmissao",
      "DtEntrega",
      "FgSituacao",
      "FgSomaIPI",
      "FgVendaFilial",
      "Garantia",
      "Horario",
      "NmConfirmacao",
      "NmFavorecido",
      "Nop",
      "NumPedido",
      "NumPedidoEmitente",
      "NumRecibo",
      "Obs",
      "Op_Transferencia",
      "PercAcrescimo",
      "PercComissaoPrazo",
      "PercComissaoVista",
      "PercDesconto",
      "Tipo",
      "TipoFrete",
      "Validade",
      "VlAcrescimo",
      "VlDesconto",
      "VlPago",
      "VlTotal",
      "CdSetor",
      "FgPreVenda",
      "HrEntrega",
      "ModeloPedido",
      "CdStatus",
      "VlFrete",
      "DtUltAlteracao",
      "CdCondPagtoChe",
      "CdTipoEntrega",
      "CdCondPagto",
      "HrEntregaIni",
      "HrEntregaFim",
      "VlTaxaEntrega",
      "CdVendedorExtra",
      "PercComissaoVistaExtra",
      "PercComissaoPrazoExtra",
      "CdMatriculaVMS",
      "NSU",
      "VlCreditoVMS",
      "OperadoraVMS",
      "FgEnvioCaneta",
      "NmPaciente",
      "CdProjeto",
      "CdLocalEstoque",
      "FgStatusOrdem",
      "FgConferencia",
      "Contato",
      "Departamento",
      "AssisTecnica",
      "PrazoEntrega",
      "FgRateio",
      "CondPagamentoIni",
      "FgEndComercial",
      "CdClienteImpressao",
      "NumPedidoOriginal",
      "FgBuscaReceita",
      "FgVendaConsultorio",
      "DestinoMaterial",
      "VlIPIFrete",
      "FgObrigaNotaFiscal",
      "NumECFCupomVinculado",
      "NumCOOCupomVinculado",
      "NumCOODAV",
      "NumSerieECF",
      "CNPJCPFAdquirente",
      "ControleNum",
      "LocalEntregaAnterior",
      "ProximidadesAnterior",
      "Usuario",
      "NumPlaca",
      "FgEntregaFutura",
      "VlSeguro",
      "VlDespesasAcessorias",
      "FgImprimePedidoSemVlUnitario",
      "VlTotalPesoBruto",
      "VlDescontoCombo",
    ];
  }
}

Pedido.knex(connections.plano);

export type TPedido = ModelObject<Pedido>;
