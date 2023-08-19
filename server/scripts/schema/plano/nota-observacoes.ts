import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaObservacoes extends ModelBase {
  static tableName = "NotaObservacoes";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Observacoes!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Observacoes",
      ];
  }
}

NotaObservacoes.knex(connections.plano);

export type TNotaObservacoes = ModelObject<NotaObservacoes>;
