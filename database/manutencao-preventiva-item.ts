import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ManutencaoPreventivaItem extends ModelBase {
  static tableName = "tManutencaoPreventivaItem";
  static idColumn = [];

  fkManutencaoPreventiva!: number;
  fkMaquinaCheckListItem!: number;
  ManutencaoOK!: number;

  static getFields() {
    return ["fkManutencaoPreventiva", "fkMaquinaCheckListItem", "ManutencaoOK"];
  }
}

ManutencaoPreventivaItem.knex(connections.oftalmo);

export type TManutencaoPreventivaItem = ModelObject<ManutencaoPreventivaItem>;
