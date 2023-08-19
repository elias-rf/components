import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaConcessionariaItem extends ModelBase {
  static tableName = "NotaConcessionariaItem";
  static idColumn = [];

  CdFilial!: number;
  Modelo!: string;
  Serie!: string;
  SubSerie!: string;
  NumDoc!: number;
  Sequencia!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlTotalItem!: number;
  VlDesconto!: number;
  CFOP!: number;
  CFOPFiscal!: number;
  SituacaoTributariaICMS!: number;
  VlBaseCalculoICMS!: number;
  AliquotaICMS!: number;
  VlICMS!: number;
  VlBaseCalculoICMSST!: number;
  AliquotaICMSST!: number;
  VlICMSST!: number;
  FgIndicadorReceita!: number;
  VlBaseCalculoPIS!: number;
  AliquotaPIS!: number;
  VlPIS!: number;
  VlBaseCalculoCOFINS!: number;
  AliquotaCOFINS!: number;
  VlCOFINS!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "Modelo",
      "Serie",
      "SubSerie",
      "NumDoc",
      "Sequencia",
      "CdProduto",
      "Quantidade",
      "VlTotalItem",
      "VlDesconto",
      "CFOP",
      "CFOPFiscal",
      "SituacaoTributariaICMS",
      "VlBaseCalculoICMS",
      "AliquotaICMS",
      "VlICMS",
      "VlBaseCalculoICMSST",
      "AliquotaICMSST",
      "VlICMSST",
      "FgIndicadorReceita",
      "VlBaseCalculoPIS",
      "AliquotaPIS",
      "VlPIS",
      "VlBaseCalculoCOFINS",
      "AliquotaCOFINS",
      "VlCOFINS",
      ];
  }
}

NotaConcessionariaItem.knex(connections.plano);

export type TNotaConcessionariaItem = ModelObject<NotaConcessionariaItem>;
