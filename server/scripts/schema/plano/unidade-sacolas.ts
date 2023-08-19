import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class UnidadeSacolas extends ModelBase {
  static tableName = "UnidadeSacolas";
  static idColumn = ["CdUnidadeSacola"];

  CdUnidadeSacola!: number;
  Descricao!: string;
  PercentualAcrescimo!: number;
  

  static getFields() {
    return [
      "CdUnidadeSacola",
      "Descricao",
      "PercentualAcrescimo",
      ];
  }
}

UnidadeSacolas.knex(connections.plano);

export type TUnidadeSacolas = ModelObject<UnidadeSacolas>;
