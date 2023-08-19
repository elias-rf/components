import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EmailVidalink extends ModelBase {
  static tableName = "EmailVidalink";
  static idColumn = [];

  Email!: string;
  

  static getFields() {
    return [
      "Email",
      ];
  }
}

EmailVidalink.knex(connections.plano);

export type TEmailVidalink = ModelObject<EmailVidalink>;
