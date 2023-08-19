import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNotaServicoSubstituido extends ModelBase {
  static tableName = "MestreNotaServicoSubstituido";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  NumeroSubstituido!: number;
  SerieSubstituido!: number;
  TipoSubstituido!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "NumeroSubstituido",
      "SerieSubstituido",
      "TipoSubstituido",
      ];
  }
}

MestreNotaServicoSubstituido.knex(connections.plano);

export type TMestreNotaServicoSubstituido = ModelObject<MestreNotaServicoSubstituido>;
