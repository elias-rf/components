import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabMovCTroco extends ModelBase {
  static tableName = "TabMovCTroco";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  VlDinheiro!: number;
  VlTroco!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "Modelo",
      "VlDinheiro",
      "VlTroco",
      ];
  }
}

TabMovCTroco.knex(connections.plano);

export type TTabMovCTroco = ModelObject<TabMovCTroco>;
