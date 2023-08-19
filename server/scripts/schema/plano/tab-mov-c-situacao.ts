import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabMovCSituacao extends ModelBase {
  static tableName = "TabMovCSituacao";
  static idColumn = [];

  CdFilial!: number;
  SeqCaixa!: number;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "SeqCaixa",
      "FgSituacao",
      ];
  }
}

TabMovCSituacao.knex(connections.plano);

export type TTabMovCSituacao = ModelObject<TabMovCSituacao>;
