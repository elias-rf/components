import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PrevisaoEntrada extends ModelBase {
  static tableName = "PrevisaoEntrada";
  static idColumn = [];

  CdFilial!: number;
  DtBase!: Date;
  Valor!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "DtBase",
      "Valor",
      ];
  }
}

PrevisaoEntrada.knex(connections.plano);

export type TPrevisaoEntrada = ModelObject<PrevisaoEntrada>;
