import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOrdemProducaoVerificada extends ModelBase {
  static tableName = "tOrdemProducaoVerificada";
  static idColumn = ["kOP"];

  kOP!: number;
  

  static getFields() {
    return [
      "kOP",
      ];
  }
}

TOrdemProducaoVerificada.knex(connections.oftalmo);

export type TTOrdemProducaoVerificada = ModelObject<TOrdemProducaoVerificada>;
