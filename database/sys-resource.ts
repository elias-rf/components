import { connections } from "@/config/connections";
import { ModelBase } from "./utils/model-base";

export class SysResource extends ModelBase {
  static tableName = "resource";
  static idColumn = "resource_id";

  resource_id!: number;
  description!: string;

  static getFields() {
    return ["resource_id", "description"];
  }
}

SysResource.knex(connections.sys);
