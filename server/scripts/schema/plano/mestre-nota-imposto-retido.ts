import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNotaImpostoRetido extends ModelBase {
  static tableName = "MestreNotaImpostoRetido";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  VlPISRetido!: number;
  VlCOFINSRetido!: number;
  VlCSLLRetido!: number;
  VlBaseCalculoIRRF!: number;
  VlIRRFRetido!: number;
  VlBaseCalculoPrevidencia!: number;
  VlPrevidenciaRetido!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "VlPISRetido",
      "VlCOFINSRetido",
      "VlCSLLRetido",
      "VlBaseCalculoIRRF",
      "VlIRRFRetido",
      "VlBaseCalculoPrevidencia",
      "VlPrevidenciaRetido",
      ];
  }
}

MestreNotaImpostoRetido.knex(connections.plano);

export type TMestreNotaImpostoRetido = ModelObject<MestreNotaImpostoRetido>;
