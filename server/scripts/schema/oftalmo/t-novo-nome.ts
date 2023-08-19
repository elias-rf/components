import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TNovoNome extends ModelBase {
  static tableName = "tNovoNome";
  static idColumn = ["NomeProdutoItem"];

  NomeProdutoItem!: string;
  NovoNome!: string;
  

  static getFields() {
    return [
      "NomeProdutoItem",
      "NovoNome",
      ];
  }
}

TNovoNome.knex(connections.oftalmo);

export type TTNovoNome = ModelObject<TNovoNome>;
