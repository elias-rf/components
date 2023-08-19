import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Atividades extends ModelBase {
  static tableName = "Atividades";
  static idColumn = ["CdAtividade"];

  CdAtividade!: number;
  NmAtividade!: string;
  

  static getFields() {
    return [
      "CdAtividade",
      "NmAtividade",
      ];
  }
}

Atividades.knex(connections.plano);

export type TAtividades = ModelObject<Atividades>;
