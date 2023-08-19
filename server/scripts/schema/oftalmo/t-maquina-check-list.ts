import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TMaquinaCheckList extends ModelBase {
  static tableName = "tMaquinaCheckList";
  static idColumn = [];

  fkMaquina!: string;
  fkMaquinaCheckListItem!: number;
  

  static getFields() {
    return [
      "fkMaquina",
      "fkMaquinaCheckListItem",
      ];
  }
}

TMaquinaCheckList.knex(connections.oftalmo);

export type TTMaquinaCheckList = ModelObject<TMaquinaCheckList>;
