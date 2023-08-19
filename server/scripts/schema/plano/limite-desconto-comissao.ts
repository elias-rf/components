import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LimiteDescontoComissao extends ModelBase {
  static tableName = "LimiteDescontoComissao";
  static idColumn = ["PercLimite"];

  PercLimite!: number;
  PercReducao!: number;
  

  static getFields() {
    return [
      "PercLimite",
      "PercReducao",
      ];
  }
}

LimiteDescontoComissao.knex(connections.plano);

export type TLimiteDescontoComissao = ModelObject<LimiteDescontoComissao>;
