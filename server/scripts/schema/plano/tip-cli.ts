import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipCli extends ModelBase {
  static tableName = "TipCli";
  static idColumn = ["CdTipo"];

  CdTipo!: number;
  NmTipo!: string;
  NumVias!: number;
  dsObservacao!: string;
  

  static getFields() {
    return [
      "CdTipo",
      "NmTipo",
      "NumVias",
      "dsObservacao",
      ];
  }
}

TipCli.knex(connections.plano);

export type TTipCli = ModelObject<TipCli>;
