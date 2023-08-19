import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaPartilhaIcmsItem extends ModelBase {
  static tableName = "NotaPartilhaICMSItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Sequencia!: number;
  CdProduto!: string;
  VlBaseCalculoICMS!: number;
  PercICMSOperacao!: number;
  PercICMSDestino!: number;
  PercPartilha!: number;
  VlICMSUFOrigem!: number;
  VlICMSUFDestino!: number;
  PercCombatePobrezaDestino!: number;
  VlCombatePobrezaDestino!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Sequencia",
      "CdProduto",
      "VlBaseCalculoICMS",
      "PercICMSOperacao",
      "PercICMSDestino",
      "PercPartilha",
      "VlICMSUFOrigem",
      "VlICMSUFDestino",
      "PercCombatePobrezaDestino",
      "VlCombatePobrezaDestino",
      ];
  }
}

NotaPartilhaIcmsItem.knex(connections.plano);

export type TNotaPartilhaIcmsItem = ModelObject<NotaPartilhaIcmsItem>;
