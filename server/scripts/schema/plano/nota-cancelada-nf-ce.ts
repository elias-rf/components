import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaCanceladaNfCe extends ModelBase {
  static tableName = "NotaCanceladaNFCe";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Usuario!: string;
  Data!: Date;
  Supervisor!: string;
  Valor!: number;
  Motivo!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Usuario",
      "Data",
      "Supervisor",
      "Valor",
      "Motivo",
      ];
  }
}

NotaCanceladaNfCe.knex(connections.plano);

export type TNotaCanceladaNfCe = ModelObject<NotaCanceladaNfCe>;
