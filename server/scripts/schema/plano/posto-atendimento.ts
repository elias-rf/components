import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PostoAtendimento extends ModelBase {
  static tableName = "PostoAtendimento";
  static idColumn = ["Codigo"];

  Codigo!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "Codigo",
      "Descricao",
      ];
  }
}

PostoAtendimento.knex(connections.plano);

export type TPostoAtendimento = ModelObject<PostoAtendimento>;
