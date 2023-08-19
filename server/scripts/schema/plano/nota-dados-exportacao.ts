import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaDadosExportacao extends ModelBase {
  static tableName = "NotaDadosExportacao";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  UfEmbarque!: string;
  LocalEmbarque!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "UfEmbarque",
      "LocalEmbarque",
      ];
  }
}

NotaDadosExportacao.knex(connections.plano);

export type TNotaDadosExportacao = ModelObject<NotaDadosExportacao>;
