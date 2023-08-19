import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaAjustes extends ModelBase {
  static tableName = "NotaAjustes";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Data!: Date;
  Usuario!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Data",
      "Usuario",
      ];
  }
}

NotaAjustes.knex(connections.plano);

export type TNotaAjustes = ModelObject<NotaAjustes>;
