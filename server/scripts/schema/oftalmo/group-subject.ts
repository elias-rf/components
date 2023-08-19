import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class GroupSubject extends ModelBase {
  static tableName = "groupSubject";
  static idColumn = [];

  idGroup!: string;
  idSubject!: string;
  

  static getFields() {
    return [
      "idGroup",
      "idSubject",
      ];
  }
}

GroupSubject.knex(connections.oftalmo);

export type TGroupSubject = ModelObject<GroupSubject>;
