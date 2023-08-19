import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentosCheque extends ModelBase {
  static tableName = "CancelamentosCheque";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  NumCheque!: number;
  DtCancelamento!: Date;
  Motivo!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "NumCheque",
      "DtCancelamento",
      "Motivo",
      ];
  }
}

CancelamentosCheque.knex(connections.plano);

export type TCancelamentosCheque = ModelObject<CancelamentosCheque>;
