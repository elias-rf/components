import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNotaIntermediador extends ModelBase {
  static tableName = "MestreNotaIntermediador";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdIntermediador!: bigint;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdIntermediador",
      ];
  }
}

MestreNotaIntermediador.knex(connections.plano);

export type TMestreNotaIntermediador = ModelObject<MestreNotaIntermediador>;
