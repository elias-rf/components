import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TPlanItem extends ModelBase {
  static tableName = "tPlanItem";
  static idColumn = ["kPlanItem"];

  kPlanItem!: number;
  NomeItem!: string;
  fkPlanGrupo!: number;
  

  static getFields() {
    return [
      "kPlanItem",
      "NomeItem",
      "fkPlanGrupo",
      ];
  }
}

TPlanItem.knex(connections.oftalmo);

export type TTPlanItem = ModelObject<TPlanItem>;
