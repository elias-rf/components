import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LoteEnvelope extends ModelBase {
  static tableName = "LoteEnvelope";
  static idColumn = [];

  CdFilial!: number;
  NumInicial!: number;
  NumFinal!: number;
  DtRemessa!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumInicial",
      "NumFinal",
      "DtRemessa",
      ];
  }
}

LoteEnvelope.knex(connections.plano);

export type TLoteEnvelope = ModelObject<LoteEnvelope>;
