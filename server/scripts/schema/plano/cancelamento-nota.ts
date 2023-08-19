import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentoNota extends ModelBase {
  static tableName = "CancelamentoNota";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  DtCancelamento!: Date;
  NmUsuario!: string;
  Motivo!: string;
  CdMotivoCancelamento!: number;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "DtCancelamento",
      "NmUsuario",
      "Motivo",
      "CdMotivoCancelamento",
      "Modelo",
      ];
  }
}

CancelamentoNota.knex(connections.plano);

export type TCancelamentoNota = ModelObject<CancelamentoNota>;
