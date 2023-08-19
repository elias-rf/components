import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ComprovanteSitef extends ModelBase {
  static tableName = "ComprovanteSitef";
  static idColumn = [];

  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFilial!: number;
  Sequencia!: number;
  Comprovante!: string;
  DtGeracao!: Date;
  Usuario!: string;
  

  static getFields() {
    return [
      "NumNota",
      "Serie",
      "Modelo",
      "CdFilial",
      "Sequencia",
      "Comprovante",
      "DtGeracao",
      "Usuario",
      ];
  }
}

ComprovanteSitef.knex(connections.plano);

export type TComprovanteSitef = ModelObject<ComprovanteSitef>;
