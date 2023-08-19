import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LimiteAcrescimoComissao extends ModelBase {
  static tableName = "LimiteAcrescimoComissao";
  static idColumn = ["PercLimite"];

  PercLimite!: number;
  PercAcrescimo!: number;
  

  static getFields() {
    return [
      "PercLimite",
      "PercAcrescimo",
      ];
  }
}

LimiteAcrescimoComissao.knex(connections.plano);

export type TLimiteAcrescimoComissao = ModelObject<LimiteAcrescimoComissao>;
