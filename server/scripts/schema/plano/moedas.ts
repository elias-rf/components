import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Moedas extends ModelBase {
  static tableName = "Moedas";
  static idColumn = ["CdMoeda"];

  CdMoeda!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdMoeda",
      "Descricao",
      ];
  }
}

Moedas.knex(connections.plano);

export type TMoedas = ModelObject<Moedas>;
