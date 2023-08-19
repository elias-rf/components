import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VidaLinkItemPedido extends ModelBase {
  static tableName = "VidaLinkItemPedido";
  static idColumn = [];

  NumAutorizacao!: number;
  DtMovimento!: Date;
  NumPedido!: number;
  NumCupomFiscal!: number;
  NumCOO!: number;
  CNPJConvenio!: number;
  CdConvenio!: string;
  CdProdutoVidaLink!: string;
  CdProduto!: string;
  Quantidade!: number;
  VlBruto!: number;
  VLLoja!: number;
  VlVIdaLink!: number;
  VlReceberLoja!: number;
  VlSubsidio!: number;
  VlDebito!: number;
  VlConvenio!: number;
  FgTipoPagamentoConv!: string;
  VlReembolso!: number;
  FgTipoReembolso!: string;
  PercReposicao!: number;
  PercComissao!: number;
  PercTaxaAdministracao!: number;
  FgListaVidalink!: string;
  DtPagamento!: Date;
  NumSolicitacaoFP!: number;
  NumAutorizacaoFP!: number;
  FgConciliacao!: string;
  DtConciliacao!: Date;
  

  static getFields() {
    return [
      "NumAutorizacao",
      "DtMovimento",
      "NumPedido",
      "NumCupomFiscal",
      "NumCOO",
      "CNPJConvenio",
      "CdConvenio",
      "CdProdutoVidaLink",
      "CdProduto",
      "Quantidade",
      "VlBruto",
      "VLLoja",
      "VlVIdaLink",
      "VlReceberLoja",
      "VlSubsidio",
      "VlDebito",
      "VlConvenio",
      "FgTipoPagamentoConv",
      "VlReembolso",
      "FgTipoReembolso",
      "PercReposicao",
      "PercComissao",
      "PercTaxaAdministracao",
      "FgListaVidalink",
      "DtPagamento",
      "NumSolicitacaoFP",
      "NumAutorizacaoFP",
      "FgConciliacao",
      "DtConciliacao",
      ];
  }
}

VidaLinkItemPedido.knex(connections.plano);

export type TVidaLinkItemPedido = ModelObject<VidaLinkItemPedido>;
