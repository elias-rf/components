import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaCombustivel extends ModelBase {
  static tableName = "NotaCombustivel";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdProduto!: string;
  Sequencia!: number;
  CdANP!: string;
  CdCODIF!: string;
  QtdeFatTemp!: number;
  UFConsumo!: string;
  QtdeBaseCalculoCIDE!: number;
  AliquotaCIDE!: number;
  VlCIDE!: number;
  PercGasNatural!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdProduto",
      "Sequencia",
      "CdANP",
      "CdCODIF",
      "QtdeFatTemp",
      "UFConsumo",
      "QtdeBaseCalculoCIDE",
      "AliquotaCIDE",
      "VlCIDE",
      "PercGasNatural",
      ];
  }
}

NotaCombustivel.knex(connections.plano);

export type TNotaCombustivel = ModelObject<NotaCombustivel>;
