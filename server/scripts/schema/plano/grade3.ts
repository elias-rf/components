import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Grade3 extends ModelBase {
  static tableName = "Grade3";
  static idColumn = ["CdGrade3"];

  CdGrade3!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdGrade3",
      "Descricao",
      ];
  }
}

Grade3.knex(connections.plano);

export type TGrade3 = ModelObject<Grade3>;
