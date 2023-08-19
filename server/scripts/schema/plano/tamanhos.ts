import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Tamanhos extends ModelBase {
  static tableName = "Tamanhos";
  static idColumn = ["CdTamanho"];

  CdTamanho!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdTamanho",
      "Descricao",
      ];
  }
}

Tamanhos.knex(connections.plano);

export type TTamanhos = ModelObject<Tamanhos>;
