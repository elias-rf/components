import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Depositarios extends ModelBase {
  static tableName = "Depositarios";
  static idColumn = ["CdDepositario"];

  CdDepositario!: number;
  NmDepositario!: string;
  

  static getFields() {
    return [
      "CdDepositario",
      "NmDepositario",
      ];
  }
}

Depositarios.knex(connections.plano);

export type TDepositarios = ModelObject<Depositarios>;
