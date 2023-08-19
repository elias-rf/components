import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Calcsenha extends ModelBase {
  static tableName = "CALCSENHA";
  static idColumn = ["CdEmpresa"];

  CdEmpresa!: number;
  IdMultiplica!: string;
  IdDivide!: string;
  IdUsuario!: string;
  DHAlteracao!: Date;
  MotAlteracao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "IdMultiplica",
      "IdDivide",
      "IdUsuario",
      "DHAlteracao",
      "MotAlteracao",
      ];
  }
}

Calcsenha.knex(connections.plano);

export type TCalcsenha = ModelObject<Calcsenha>;
