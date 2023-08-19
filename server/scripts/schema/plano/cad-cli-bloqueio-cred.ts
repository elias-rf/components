import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliBloqueioCred extends ModelBase {
  static tableName = "CadCliBloqueioCred";
  static idColumn = [];

  CdCliente!: number;
  DtOcorrencia!: Date;
  Tipo!: string;
  CdUsuario!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "DtOcorrencia",
      "Tipo",
      "CdUsuario",
      ];
  }
}

CadCliBloqueioCred.knex(connections.plano);

export type TCadCliBloqueioCred = ModelObject<CadCliBloqueioCred>;
