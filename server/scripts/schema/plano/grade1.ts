import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Grade1 extends ModelBase {
  static tableName = "Grade1";
  static idColumn = ["CdGrade1"];

  CdGrade1!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdGrade1",
      "Descricao",
      ];
  }
}

Grade1.knex(connections.plano);

export type TGrade1 = ModelObject<Grade1>;
