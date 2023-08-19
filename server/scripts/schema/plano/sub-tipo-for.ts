import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SubTipoFor extends ModelBase {
  static tableName = "SubTipoFor";
  static idColumn = ["CdSubTipo"];

  CdSubTipo!: number;
  NmSubTipo!: string;
  

  static getFields() {
    return [
      "CdSubTipo",
      "NmSubTipo",
      ];
  }
}

SubTipoFor.knex(connections.plano);

export type TSubTipoFor = ModelObject<SubTipoFor>;
