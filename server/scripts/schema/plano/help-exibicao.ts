import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HelpExibicao extends ModelBase {
  static tableName = "HelpExibicao";
  static idColumn = ["IdFuncao"];

  IdFuncao!: string;
  Descricao!: string;
  Link!: string;
  

  static getFields() {
    return [
      "IdFuncao",
      "Descricao",
      "Link",
      ];
  }
}

HelpExibicao.knex(connections.plano);

export type THelpExibicao = ModelObject<HelpExibicao>;
