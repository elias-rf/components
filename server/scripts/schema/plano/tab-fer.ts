import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabFer extends ModelBase {
  static tableName = "TabFer";
  static idColumn = [];

  DtBase!: Date;
  Tipo!: string;


  static getFields() {
    return [
      "DtBase",
      "Tipo",
      ];
  }
}

TabFer.knex(connections.plano);

export type TTabFer = ModelObject<TabFer>;
