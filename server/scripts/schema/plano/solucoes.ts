import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Solucoes extends ModelBase {
  static tableName = "Solucoes";
  static idColumn = ["CdSolucao"];

  CdSolucao!: number;
  NmSolucao!: string;
  

  static getFields() {
    return [
      "CdSolucao",
      "NmSolucao",
      ];
  }
}

Solucoes.knex(connections.plano);

export type TSolucoes = ModelObject<Solucoes>;
