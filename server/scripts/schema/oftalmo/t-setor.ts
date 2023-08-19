import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TSetor extends ModelBase {
  static tableName = "tSetor";
  static idColumn = [];

  kSetor!: number;
  fkDivisao!: number;
  Setor!: string;
  Descricao!: string;
  

  static getFields() {
    return [
      "kSetor",
      "fkDivisao",
      "Setor",
      "Descricao",
      ];
  }
}

TSetor.knex(connections.oftalmo);

export type TTSetor = ModelObject<TSetor>;
