import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TSistemaUnidade extends ModelBase {
  static tableName = "tSistemaUnidade";
  static idColumn = ["KUnidade"];

  KUnidade!: number;
  Abreviatura!: string;
  NomeUnidade!: string;
  

  static getFields() {
    return [
      "KUnidade",
      "Abreviatura",
      "NomeUnidade",
      ];
  }
}

TSistemaUnidade.knex(connections.oftalmo);

export type TTSistemaUnidade = ModelObject<TSistemaUnidade>;
