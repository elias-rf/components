import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Especialidades extends ModelBase {
  static tableName = "Especialidades";
  static idColumn = ["CdEspecialidade"];

  CdEspecialidade!: number;
  DsEspecialidade!: string;
  

  static getFields() {
    return [
      "CdEspecialidade",
      "DsEspecialidade",
      ];
  }
}

Especialidades.knex(connections.plano);

export type TEspecialidades = ModelObject<Especialidades>;
