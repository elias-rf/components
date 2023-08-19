import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class GroupSubject extends ModelBase {
  static tableName = "groupSubject";
  static idColumn = ["idGroup", "idSubject"];
  idGroup!: string;
  idSubject!: string;

  static getFields() {
    return ["idGroup", "idSubject"];
  }
}

GroupSubject.knex(connections.oftalmo);

export type TGroupSubject = ModelObject<GroupSubject>;
