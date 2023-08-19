import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EPharmaPrescritor extends ModelBase {
  static tableName = "ePharmaPrescritor";
  static idColumn = ["CdTipoPrescritor"];

  CdTipoPrescritor!: number;
  DescricaoPrescritor!: string;
  

  static getFields() {
    return [
      "CdTipoPrescritor",
      "DescricaoPrescritor",
      ];
  }
}

EPharmaPrescritor.knex(connections.plano);

export type TEPharmaPrescritor = ModelObject<EPharmaPrescritor>;
