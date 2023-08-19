import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FontePagamento extends ModelBase {
  static tableName = "FontePagamento";
  static idColumn = ["CdFontePagamento"];

  CdFontePagamento!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdFontePagamento",
      "Descricao",
      ];
  }
}

FontePagamento.knex(connections.plano);

export type TFontePagamento = ModelObject<FontePagamento>;
