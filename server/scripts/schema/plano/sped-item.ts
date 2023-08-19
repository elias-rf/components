import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedItem extends ModelBase {
  static tableName = "SpedItem";
  static idColumn = [];

  CdFilial!: number;
  CdEmitente!: number;
  TipoEmitente!: string;
  NumDocumento!: number;
  Serie!: string;
  SubSerie!: string;
  Modelo!: string;
  NumECF!: number;
  Sequencia!: number;
  CdProduto!: string;
  Quantidade!: number;
  IndMovimento!: string;
  Unidade!: string;
  CFOPItem!: number;
  CdNatureza!: number;
  VlUnitario!: number;
  VlProduto!: number;
  VlDesconto!: number;
  VlSuframa!: number;
  VlFreteItem!: number;
  VlSeguroItem!: number;
  VlDespesaAcessoriaItem!: number;
  VlTotalItem!: number;
  CSTICMS!: number;
  VlBaseCalculoICMSItem!: number;
  AliquotaICMS!: number;
  VlICMSItem!: number;
  VlBaseCalculoICMSSTItem!: number;
  AliquotaICMSST!: number;
  VlICMSSTItem!: number;
  CSTIPI!: number;
  CdEnquadramentoIPI!: number;
  VlBaseCalculoIPIItem!: number;
  AliquotaIPI!: number;
  VlIPIItem!: number;
  CdCreditoPISCOFINS!: number;
  IndOrigemCreditoPISCOFINS!: number;
  CdContApuradaPISCOFINS!: number;
  CdBaseCreditoPISCOFINS!: number;
  CdNaturezaPISCOFINS!: number;
  CSTPIS!: number;
  VlBaseCalculoPISItem!: number;
  AliquotaPIS!: number;
  VlPISItem!: number;
  VlPISSTItem!: number;
  CSTCOFINS!: number;
  VlBaseCalculoCOFINSItem!: number;
  AliquotaCOFINS!: number;
  VlCOFINSItem!: number;
  VlCOFINSSTItem!: number;
  ControleEstoque!: number;
  PlanoContaSped!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdEmitente",
      "TipoEmitente",
      "NumDocumento",
      "Serie",
      "SubSerie",
      "Modelo",
      "NumECF",
      "Sequencia",
      "CdProduto",
      "Quantidade",
      "IndMovimento",
      "Unidade",
      "CFOPItem",
      "CdNatureza",
      "VlUnitario",
      "VlProduto",
      "VlDesconto",
      "VlSuframa",
      "VlFreteItem",
      "VlSeguroItem",
      "VlDespesaAcessoriaItem",
      "VlTotalItem",
      "CSTICMS",
      "VlBaseCalculoICMSItem",
      "AliquotaICMS",
      "VlICMSItem",
      "VlBaseCalculoICMSSTItem",
      "AliquotaICMSST",
      "VlICMSSTItem",
      "CSTIPI",
      "CdEnquadramentoIPI",
      "VlBaseCalculoIPIItem",
      "AliquotaIPI",
      "VlIPIItem",
      "CdCreditoPISCOFINS",
      "IndOrigemCreditoPISCOFINS",
      "CdContApuradaPISCOFINS",
      "CdBaseCreditoPISCOFINS",
      "CdNaturezaPISCOFINS",
      "CSTPIS",
      "VlBaseCalculoPISItem",
      "AliquotaPIS",
      "VlPISItem",
      "VlPISSTItem",
      "CSTCOFINS",
      "VlBaseCalculoCOFINSItem",
      "AliquotaCOFINS",
      "VlCOFINSItem",
      "VlCOFINSSTItem",
      "ControleEstoque",
      "PlanoContaSped",
      ];
  }
}

SpedItem.knex(connections.plano);

export type TSpedItem = ModelObject<SpedItem>;
