import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Grade4 extends ModelBase {
  static tableName = "Grade4";
  static idColumn = ["CdGrade4"];

  CdGrade4!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdGrade4",
      "Descricao",
      ];
  }
}

Grade4.knex(connections.plano);

export type TGrade4 = ModelObject<Grade4>;
