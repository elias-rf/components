import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaTerceirosNfe extends ModelBase {
  static tableName = "NotaTerceirosNfe";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdEmitente!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  NumChaveNfe!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdEmitente",
      "NumDocumento",
      "Serie",
      "Modelo",
      "NumChaveNfe",
      ];
  }
}

NotaTerceirosNfe.knex(connections.plano);

export type TNotaTerceirosNfe = ModelObject<NotaTerceirosNfe>;
