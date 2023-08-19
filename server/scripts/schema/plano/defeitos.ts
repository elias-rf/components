import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Defeitos extends ModelBase {
  static tableName = "Defeitos";
  static idColumn = ["CdDefeito"];

  CdDefeito!: number;
  NmDefeito!: string;
  

  static getFields() {
    return [
      "CdDefeito",
      "NmDefeito",
      ];
  }
}

Defeitos.knex(connections.plano);

export type TDefeitos = ModelObject<Defeitos>;
