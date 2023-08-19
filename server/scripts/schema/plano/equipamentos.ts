import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Equipamentos extends ModelBase {
  static tableName = "Equipamentos";
  static idColumn = ["CdEquipamento"];

  CdEquipamento!: number;
  NmEquipamento!: string;
  

  static getFields() {
    return [
      "CdEquipamento",
      "NmEquipamento",
      ];
  }
}

Equipamentos.knex(connections.plano);

export type TEquipamentos = ModelObject<Equipamentos>;
