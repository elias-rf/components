import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoAluguel extends ModelBase {
  static tableName = "ContratoAluguel";
  static idColumn = [];

  CdCliente!: number;
  DiaContr!: number;
  VlFranquia!: number;
  QtdeFranquia!: number;
  VlUnitExcedente!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "DiaContr",
      "VlFranquia",
      "QtdeFranquia",
      "VlUnitExcedente",
      ];
  }
}

ContratoAluguel.knex(connections.plano);

export type TContratoAluguel = ModelObject<ContratoAluguel>;
