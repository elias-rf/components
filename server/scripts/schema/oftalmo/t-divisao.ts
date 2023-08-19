import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TDivisao extends ModelBase {
  static tableName = "tDivisao";
  static idColumn = ["kDivisao"];

  kDivisao!: number;
  Divisao!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "kDivisao",
      "Divisao",
      "Descricao",
      ];
  }
}

TDivisao.knex(connections.oftalmo);

export type TTDivisao = ModelObject<TDivisao>;
