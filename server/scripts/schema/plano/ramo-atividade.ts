import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RamoAtividade extends ModelBase {
  static tableName = "RamoAtividade";
  static idColumn = ["CdRamoAtividade"];

  CdRamoAtividade!: number;
  NmRamoAtividade!: string;
  

  static getFields() {
    return [
      "CdRamoAtividade",
      "NmRamoAtividade",
      ];
  }
}

RamoAtividade.knex(connections.plano);

export type TRamoAtividade = ModelObject<RamoAtividade>;
