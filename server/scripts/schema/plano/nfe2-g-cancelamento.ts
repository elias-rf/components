import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Nfe2GCancelamento extends ModelBase {
  static tableName = "Nfe2GCancelamento";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdMotivoCancelamento!: number;
  MotivoCancelamento!: string;
  DtCancelamento!: Date;
  UsuarioCancelamento!: string;
  NumProtocoloCancelamento!: string;
  DtProtocoloCancelamento!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdMotivoCancelamento",
      "MotivoCancelamento",
      "DtCancelamento",
      "UsuarioCancelamento",
      "NumProtocoloCancelamento",
      "DtProtocoloCancelamento",
      ];
  }
}

Nfe2GCancelamento.knex(connections.plano);

export type TNfe2GCancelamento = ModelObject<Nfe2GCancelamento>;
