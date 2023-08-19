import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TNaoConformidade extends ModelBase {
  static tableName = "tNaoConformidade";
  static idColumn = ["kNaoConformidade"];

  kNaoConformidade!: number;
  NaoConformidade!: string;
  Descricao!: string;
  Enable!: number;
  

  static getFields() {
    return [
      "kNaoConformidade",
      "NaoConformidade",
      "Descricao",
      "Enable",
      ];
  }
}

TNaoConformidade.knex(connections.oftalmo);

export type TTNaoConformidade = ModelObject<TNaoConformidade>;
