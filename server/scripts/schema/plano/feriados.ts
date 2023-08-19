import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Feriados extends ModelBase {
  static tableName = "Feriados";
  static idColumn = [];

  CdCidade!: number;
  DtFeriado!: Date;
  

  static getFields() {
    return [
      "CdCidade",
      "DtFeriado",
      ];
  }
}

Feriados.knex(connections.plano);

export type TFeriados = ModelObject<Feriados>;
