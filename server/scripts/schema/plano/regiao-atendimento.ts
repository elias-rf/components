import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RegiaoAtendimento extends ModelBase {
  static tableName = "RegiaoAtendimento";
  static idColumn = ["Regiao"];

  Regiao!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "Regiao",
      "Descricao",
      ];
  }
}

RegiaoAtendimento.knex(connections.plano);

export type TRegiaoAtendimento = ModelObject<RegiaoAtendimento>;
