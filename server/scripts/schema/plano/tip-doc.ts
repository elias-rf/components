import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipDoc extends ModelBase {
  static tableName = "TipDoc";
  static idColumn = ["Codigo"];

  Codigo!: string;
  Descricao!: string;
  FgConsiderarDanfe!: string;
  FgMovimentoCheque!: string;
  FgAtivo!: string;
  FgConsiderarXML!: string;
  

  static getFields() {
    return [
      "Codigo",
      "Descricao",
      "FgConsiderarDanfe",
      "FgMovimentoCheque",
      "FgAtivo",
      "FgConsiderarXML",
      ];
  }
}

TipDoc.knex(connections.plano);

export type TTipDoc = ModelObject<TipDoc>;
