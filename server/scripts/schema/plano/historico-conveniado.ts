import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoConveniado extends ModelBase {
  static tableName = "HistoricoConveniado";
  static idColumn = [];

  CdFuncionario!: number;
  CdCliente!: number;
  Sequencia!: number;
  Historico!: string;
  Data!: Date;
  Usuario!: string;
  

  static getFields() {
    return [
      "CdFuncionario",
      "CdCliente",
      "Sequencia",
      "Historico",
      "Data",
      "Usuario",
      ];
  }
}

HistoricoConveniado.knex(connections.plano);

export type THistoricoConveniado = ModelObject<HistoricoConveniado>;
