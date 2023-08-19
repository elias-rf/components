import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaComprovanteRecLocal extends ModelBase {
  static tableName = "NotaComprovanteRecLocal";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  NumNotaAviso!: number;
  SerieAviso!: string;
  ModeloAviso!: string;
  DtEmissao!: Date;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "NumNotaAviso",
      "SerieAviso",
      "ModeloAviso",
      "DtEmissao",
      "FgSituacao",
      ];
  }
}

NotaComprovanteRecLocal.knex(connections.plano);

export type TNotaComprovanteRecLocal = ModelObject<NotaComprovanteRecLocal>;
