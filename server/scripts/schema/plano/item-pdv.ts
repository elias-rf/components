import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemPdv extends ModelBase {
  static tableName = "ItemPDV";
  static idColumn = [];

  CdFilial!: number;
  NroPDV!: number;
  NumCupom!: number;
  Sequencia!: number;
  CdProduto!: string;
  CdRefEstoque!: string;
  Quantidade!: number;
  VlUnitario!: number;
  VlDescGer!: number;
  VlDescDir!: number;
  VlTotal!: number;
  VlLiquido!: number;
  AliqISS!: number;
  VlComissaoPrazo!: number;
  VlComissaoVista!: number;
  FgSituacao!: string;
  Atualizacao!: string;
  CustoMedio!: number;
  CdProdutoAssociado!: string;
  ImprimeComponentes!: string;
  FgEstoque!: string;
  ComplementoDescricao!: string;
  CRM!: string;
  PercLimiteComissao!: number;
  ComplementoDesc!: string;
  VlCusto!: number;
  DtEmissao!: Date;
  PontosMilhagem!: number;
  PercComisVista!: number;
  PercComisPrazo!: number;
  CdVendedor!: number;
  PercComisVistaExtra!: number;
  VlComisVistaExtra!: number;
  PercComisPrazoExtra!: number;
  VlComisPrazoExtra!: number;
  SituacaoTributariaPIS!: number;
  AliquotaPIS!: number;
  BaseCalculoPIS!: number;
  VlPIS!: number;
  SituacaoTributariaCOFINS!: number;
  BaseCalculoCOFINS!: number;
  AliquotaCOFINS!: number;
  VlCOFINS!: number;
  VlBaseCalculoICMS!: number;
  VlICMS!: number;
  VlBaseCalculoISS!: number;
  VlISS!: number;
  VlBaseCalculoPIS!: number;
  VlBaseCalculoCOFINS!: number;
  SituacaoTributariaICMS!: number;
  AliquotaICMS!: number;
  NumCOO!: number;
  NumCCF!: number;
  NumSerieECF!: string;
  CdContribuicaoApuradaPISCOFINS!: number;
  VlAproximadoImpostoItem!: number;
  ControleFilial!: number;
  ControleECF!: number;
  ControleCupom!: number;
  ControleSeq!: number;
  VlAproximadoImpostoFederal!: number;
  VlAproximadoImpostoEstadual!: number;
  VlAproximadoImpostoMunicipal!: number;
  PlanoContaSped!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NroPDV",
      "NumCupom",
      "Sequencia",
      "CdProduto",
      "CdRefEstoque",
      "Quantidade",
      "VlUnitario",
      "VlDescGer",
      "VlDescDir",
      "VlTotal",
      "VlLiquido",
      "AliqISS",
      "VlComissaoPrazo",
      "VlComissaoVista",
      "FgSituacao",
      "Atualizacao",
      "CustoMedio",
      "CdProdutoAssociado",
      "ImprimeComponentes",
      "FgEstoque",
      "ComplementoDescricao",
      "CRM",
      "PercLimiteComissao",
      "ComplementoDesc",
      "VlCusto",
      "DtEmissao",
      "PontosMilhagem",
      "PercComisVista",
      "PercComisPrazo",
      "CdVendedor",
      "PercComisVistaExtra",
      "VlComisVistaExtra",
      "PercComisPrazoExtra",
      "VlComisPrazoExtra",
      "SituacaoTributariaPIS",
      "AliquotaPIS",
      "BaseCalculoPIS",
      "VlPIS",
      "SituacaoTributariaCOFINS",
      "BaseCalculoCOFINS",
      "AliquotaCOFINS",
      "VlCOFINS",
      "VlBaseCalculoICMS",
      "VlICMS",
      "VlBaseCalculoISS",
      "VlISS",
      "VlBaseCalculoPIS",
      "VlBaseCalculoCOFINS",
      "SituacaoTributariaICMS",
      "AliquotaICMS",
      "NumCOO",
      "NumCCF",
      "NumSerieECF",
      "CdContribuicaoApuradaPISCOFINS",
      "VlAproximadoImpostoItem",
      "ControleFilial",
      "ControleECF",
      "ControleCupom",
      "ControleSeq",
      "VlAproximadoImpostoFederal",
      "VlAproximadoImpostoEstadual",
      "VlAproximadoImpostoMunicipal",
      "PlanoContaSped",
      ];
  }
}

ItemPdv.knex(connections.plano);

export type TItemPdv = ModelObject<ItemPdv>;
