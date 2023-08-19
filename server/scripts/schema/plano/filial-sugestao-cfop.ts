import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialSugestaoCfop extends ModelBase {
  static tableName = "FilialSugestaoCFOP";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CFOPEstadualEntrada!: number;
  CFOPEstadualSaida!: number;
  CFOPInterEstadualEntrada!: number;
  CFOPInterEstadualSaida!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CFOPEstadualEntrada",
      "CFOPEstadualSaida",
      "CFOPInterEstadualEntrada",
      "CFOPInterEstadualSaida",
      ];
  }
}

FilialSugestaoCfop.knex(connections.plano);

export type TFilialSugestaoCfop = ModelObject<FilialSugestaoCfop>;
