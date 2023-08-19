import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaPartilhaIcmsMestre extends ModelBase {
  static tableName = "NotaPartilhaICMSMestre";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  VlBaseCalculoICMS!: number;
  VlICMSUFOrigem!: number;
  VlICMSUFDestino!: number;
  VlCombatePobrezaDestino!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "VlBaseCalculoICMS",
      "VlICMSUFOrigem",
      "VlICMSUFDestino",
      "VlCombatePobrezaDestino",
      ];
  }
}

NotaPartilhaIcmsMestre.knex(connections.plano);

export type TNotaPartilhaIcmsMestre = ModelObject<NotaPartilhaIcmsMestre>;
