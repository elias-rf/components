import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TPlanComponente extends ModelBase {
  static tableName = "tPlanComponente";
  static idColumn = ["kPlanComponente"];

  kPlanComponente!: number;
  fkPlanItem!: number;
  NomeComponente!: string;
  BaseFrequencia!: string;
  Frequencia!: number;
  TempoAviso!: number;
  

  static getFields() {
    return [
      "kPlanComponente",
      "fkPlanItem",
      "NomeComponente",
      "BaseFrequencia",
      "Frequencia",
      "TempoAviso",
      ];
  }
}

TPlanComponente.knex(connections.oftalmo);

export type TTPlanComponente = ModelObject<TPlanComponente>;
