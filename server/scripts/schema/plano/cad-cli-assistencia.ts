import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliAssistencia extends ModelBase {
  static tableName = "CadCliAssistencia";
  static idColumn = ["CdCliente"];

  CdCliente!: number;
  FgBancoHoras!: string;
  TempoResposta!: number;
  TempoSolucao!: number;
  TempoDeslocamento!: number;
  VlHoraAvulsa!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "FgBancoHoras",
      "TempoResposta",
      "TempoSolucao",
      "TempoDeslocamento",
      "VlHoraAvulsa",
      ];
  }
}

CadCliAssistencia.knex(connections.plano);

export type TCadCliAssistencia = ModelObject<CadCliAssistencia>;
