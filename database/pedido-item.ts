import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class PedidoItem extends ModelBase {
  static tableName = "ItemPedido";
  static idColumn = ["CdFilial", "NumPedido"];

  CdFilial!: number;
  CdProduto!: string;
  NumPedido!: number;
  Tipo!: string;
  DtPrevEntrega!: Date;
  Sequencia!: number;
  CdRefEstoque!: string;
  CdKit!: string;
  Qtde!: number;
  ConversaoMedida!: number;
  Correcao!: number;
  FgPeso!: string;
  ICMS!: number;
  ImprimeComponentes!: string;
  Peso!: string;
  SelecProd!: string;
  VlDescontoFechamento!: number;
  VlUnitario!: number;
  PercDesconto!: number;
  VlDesconto!: number;
  VlLiquido!: number;
  IPI!: number;
  VlTotal!: number;
  CustoFinanc!: number;
  QtdeAtendida!: number;
  CdAcumuladorParcial!: number;
  ComplementoDescricao!: string;
  CRM!: string;
  PercLimiteComissao!: number;
  NumFormula!: number;
  VlVistaUnit!: number;
  VlPrazoUnit!: number;
  VlFidelidadeUnit!: number;
  QtdeFormula!: number;
  DescricaoAlterada!: string;
  StatusTRN!: number;
  Unidade!: string;
  FgImprimeObs!: string;
  DtReceita!: Date;
  TributacaoICMS!: number;
  NumPedidoEmitente!: string;
  CdProjeto!: number;
  fgBuscaDCB!: string;
  PrazoEntregaItem!: string;
  VlVendaOriginal!: number;
  VlAcrescimo!: number;
  FgSituacaoItem!: string;
  DtEmissao!: Date;
  FgPreVenda!: string;
  ControleNum!: number;
  ControleSeq!: number;
  SituacaoTributaria!: string;
  AliquotaICMS!: number;
  DescricaoProduto!: string;
  PercDescontoOriginal!: number;
  AliquotaICMSST!: number;
  CdSetorEntrega!: number;
  VlPesoBruto!: number;
  CdStatus!: number;
  VlAcrescimoProduto!: number;
  VlUnitarioNovo!: number;

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "NumPedido",
      "Tipo",
      "DtPrevEntrega",
      "Sequencia",
      "CdRefEstoque",
      "CdKit",
      "Qtde",
      "ConversaoMedida",
      "Correcao",
      "FgPeso",
      "ICMS",
      "ImprimeComponentes",
      "Peso",
      "SelecProd",
      "VlDescontoFechamento",
      "VlUnitario",
      "PercDesconto",
      "VlDesconto",
      "VlLiquido",
      "IPI",
      "VlTotal",
      "CustoFinanc",
      "QtdeAtendida",
      "CdAcumuladorParcial",
      "ComplementoDescricao",
      "CRM",
      "PercLimiteComissao",
      "NumFormula",
      "VlVistaUnit",
      "VlPrazoUnit",
      "VlFidelidadeUnit",
      "QtdeFormula",
      "DescricaoAlterada",
      "StatusTRN",
      "Unidade",
      "FgImprimeObs",
      "DtReceita",
      "TributacaoICMS",
      "NumPedidoEmitente",
      "CdProjeto",
      "fgBuscaDCB",
      "PrazoEntregaItem",
      "VlVendaOriginal",
      "VlAcrescimo",
      "FgSituacaoItem",
      "DtEmissao",
      "FgPreVenda",
      "ControleNum",
      "ControleSeq",
      "SituacaoTributaria",
      "AliquotaICMS",
      "DescricaoProduto",
      "PercDescontoOriginal",
      "AliquotaICMSST",
      "CdSetorEntrega",
      "VlPesoBruto",
      "CdStatus",
      "VlAcrescimoProduto",
      "VlUnitarioNovo",
    ];
  }
}

PedidoItem.knex(connections.plano);

export type TPedidoItem = ModelObject<PedidoItem>;
