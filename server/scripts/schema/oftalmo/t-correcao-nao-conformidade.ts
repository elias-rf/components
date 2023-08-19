import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TCorrecaoNaoConformidade extends ModelBase {
  static tableName = "tCorrecaoNaoConformidade";
  static idColumn = ["kCorrecao"];

  kCorrecao!: number;
  Correcao!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "kCorrecao",
      "Correcao",
      "Descricao",
      ];
  }
}

TCorrecaoNaoConformidade.knex(connections.oftalmo);

export type TTCorrecaoNaoConformidade = ModelObject<TCorrecaoNaoConformidade>;
