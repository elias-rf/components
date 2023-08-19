import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MotivoCancelamento extends ModelBase {
  static tableName = "MotivoCancelamento";
  static idColumn = ["Codigo"];

  Codigo!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "Codigo",
      "Descricao",
      ];
  }
}

MotivoCancelamento.knex(connections.plano);

export type TMotivoCancelamento = ModelObject<MotivoCancelamento>;
