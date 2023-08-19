import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoCupom extends ModelBase {
  static tableName = "HistoricoCupom";
  static idColumn = [];

  CdFilial!: number;
  NroPDV!: number;
  NumCupom!: number;
  Sequencia!: number;
  Ocorrencia!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NroPDV",
      "NumCupom",
      "Sequencia",
      "Ocorrencia",
      ];
  }
}

HistoricoCupom.knex(connections.plano);

export type THistoricoCupom = ModelObject<HistoricoCupom>;
