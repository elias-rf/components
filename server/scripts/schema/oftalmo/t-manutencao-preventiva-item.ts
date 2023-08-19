import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TManutencaoPreventivaItem extends ModelBase {
  static tableName = "tManutencaoPreventivaItem";
  static idColumn = [];

  fkManutencaoPreventiva!: number;
  fkMaquinaCheckListItem!: number;
  ManutencaoOK!: number;
  

  static getFields() {
    return [
      "fkManutencaoPreventiva",
      "fkMaquinaCheckListItem",
      "ManutencaoOK",
      ];
  }
}

TManutencaoPreventivaItem.knex(connections.oftalmo);

export type TTManutencaoPreventivaItem = ModelObject<TManutencaoPreventivaItem>;
