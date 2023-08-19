import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentoCupom extends ModelBase {
  static tableName = "CancelamentoCupom";
  static idColumn = [];

  CdFilial!: number;
  NroPDV!: number;
  NumDoc!: number;
  Usuario!: string;
  Gerente!: string;
  Motivo!: string;
  DtCancelamento!: Date;
  CdMotivoCancelamento!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NroPDV",
      "NumDoc",
      "Usuario",
      "Gerente",
      "Motivo",
      "DtCancelamento",
      "CdMotivoCancelamento",
      ];
  }
}

CancelamentoCupom.knex(connections.plano);

export type TCancelamentoCupom = ModelObject<CancelamentoCupom>;
