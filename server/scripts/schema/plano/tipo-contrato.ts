import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoContrato extends ModelBase {
  static tableName = "TipoContrato";
  static idColumn = ["Codigo"];

  Codigo!: number;
  Descricao!: string;
  fG6949!: string;
  

  static getFields() {
    return [
      "Codigo",
      "Descricao",
      "fG6949",
      ];
  }
}

TipoContrato.knex(connections.plano);

export type TTipoContrato = ModelObject<TipoContrato>;
