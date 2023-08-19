import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentosLctos extends ModelBase {
  static tableName = "CancelamentosLctos";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  DtBase!: Date;
  NumLcto!: number;
  Tipo!: string;
  DtCancelamento!: Date;
  Motivo!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtBase",
      "NumLcto",
      "Tipo",
      "DtCancelamento",
      "Motivo",
      ];
  }
}

CancelamentosLctos.knex(connections.plano);

export type TCancelamentosLctos = ModelObject<CancelamentosLctos>;
