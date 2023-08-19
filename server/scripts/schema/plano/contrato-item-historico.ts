import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoItemHistorico extends ModelBase {
  static tableName = "ContratoItemHistorico";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdCliente!: number;
  DiaContrato!: number;
  Sequencia!: number;
  DtEvento!: Date;
  Evento!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdCliente",
      "DiaContrato",
      "Sequencia",
      "DtEvento",
      "Evento",
      ];
  }
}

ContratoItemHistorico.knex(connections.plano);

export type TContratoItemHistorico = ModelObject<ContratoItemHistorico>;
