import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Grade2 extends ModelBase {
  static tableName = "Grade2";
  static idColumn = ["CdGrade2"];

  CdGrade2!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdGrade2",
      "Descricao",
      ];
  }
}

Grade2.knex(connections.plano);

export type TGrade2 = ModelObject<Grade2>;
