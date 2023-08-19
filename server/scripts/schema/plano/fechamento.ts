import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Fechamento extends ModelBase {
  static tableName = "Fechamento";
  static idColumn = [];

  CdEmpresa!: number;
  AnoFec!: number;
  MesFec!: number;
  SitFec!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "AnoFec",
      "MesFec",
      "SitFec",
      ];
  }
}

Fechamento.knex(connections.plano);

export type TFechamento = ModelObject<Fechamento>;
