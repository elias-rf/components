import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TMaquinaCheckListItem extends ModelBase {
  static tableName = "tMaquinaCheckListItem";
  static idColumn = ["kMaquinaCheckListItem"];

  kMaquinaCheckListItem!: number;
  DescricaoItem!: string;
  

  static getFields() {
    return [
      "kMaquinaCheckListItem",
      "DescricaoItem",
      ];
  }
}

TMaquinaCheckListItem.knex(connections.oftalmo);

export type TTMaquinaCheckListItem = ModelObject<TMaquinaCheckListItem>;
