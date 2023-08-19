import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemMapaEcf extends ModelBase {
  static tableName = "ItemMapaECF";
  static idColumn = [];

  CdFilial!: number;
  DtMapa!: Date;
  NumECF!: number;
  NumeroSerie!: string;
  ContReducaoZ!: number;
  ConReinicioCRO!: number;
  NumOperacaoInicial!: number;
  NumOperacaoFinal!: number;
  ConCancelamento!: number;
  VlGTAtual!: number;
  VlGTAnterior!: number;
  VlVendaBruta!: number;
  VlVendaLiquida!: number;
  VlTotalISS!: number;
  VlCancelamentos!: number;
  VlDescontos!: number;
  VlAcrescimo!: number;
  VlBaseCalcICMS!: number;
  VlIcms!: number;
  VlIsentas!: number;
  VlOutros!: number;
  VlSubTribComInsidencia!: number;
  VlSubTribSemInsidencia!: number;
  VlRecebimentos!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "DtMapa",
      "NumECF",
      "NumeroSerie",
      "ContReducaoZ",
      "ConReinicioCRO",
      "NumOperacaoInicial",
      "NumOperacaoFinal",
      "ConCancelamento",
      "VlGTAtual",
      "VlGTAnterior",
      "VlVendaBruta",
      "VlVendaLiquida",
      "VlTotalISS",
      "VlCancelamentos",
      "VlDescontos",
      "VlAcrescimo",
      "VlBaseCalcICMS",
      "VlIcms",
      "VlIsentas",
      "VlOutros",
      "VlSubTribComInsidencia",
      "VlSubTribSemInsidencia",
      "VlRecebimentos",
      ];
  }
}

ItemMapaEcf.knex(connections.plano);

export type TItemMapaEcf = ModelObject<ItemMapaEcf>;
