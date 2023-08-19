import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TSistemaMes extends ModelBase {
  static tableName = "tSistemaMes";
  static idColumn = ["Mes"];

  Mes!: Date;
  DiaInicial!: Date;
  DiaFinal!: Date;
  DiaInicialCornea!: Date;
  DiaFinalCornea!: Date;
  QtdDiasMes!: number;
  

  static getFields() {
    return [
      "Mes",
      "DiaInicial",
      "DiaFinal",
      "DiaInicialCornea",
      "DiaFinalCornea",
      "QtdDiasMes",
      ];
  }
}

TSistemaMes.knex(connections.oftalmo);

export type TTSistemaMes = ModelObject<TSistemaMes>;
