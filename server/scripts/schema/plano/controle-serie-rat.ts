import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ControleSerieRat extends ModelBase {
  static tableName = "ControleSerieRat";
  static idColumn = [];

  CdCliente!: number;
  NumSerie!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "NumSerie",
      ];
  }
}

ControleSerieRat.knex(connections.plano);

export type TControleSerieRat = ModelObject<ControleSerieRat>;
