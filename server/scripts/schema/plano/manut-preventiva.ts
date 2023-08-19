import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ManutPreventiva extends ModelBase {
  static tableName = "ManutPreventiva";
  static idColumn = [];

  CdCliente!: number;
  Sequencia!: number;
  CdEquipamento!: number;
  NumSerie!: string;
  Periodo!: number;
  DtultPreventiva!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "Sequencia",
      "CdEquipamento",
      "NumSerie",
      "Periodo",
      "DtultPreventiva",
      ];
  }
}

ManutPreventiva.knex(connections.plano);

export type TManutPreventiva = ModelObject<ManutPreventiva>;
