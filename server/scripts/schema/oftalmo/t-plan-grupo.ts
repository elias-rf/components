import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TPlanGrupo extends ModelBase {
  static tableName = "tPlanGrupo";
  static idColumn = ["kPlanGrupo"];

  kPlanGrupo!: number;
  NomeGrupo!: string;
  

  static getFields() {
    return [
      "kPlanGrupo",
      "NomeGrupo",
      ];
  }
}

TPlanGrupo.knex(connections.oftalmo);

export type TTPlanGrupo = ModelObject<TPlanGrupo>;
