import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Tecnicos extends ModelBase {
  static tableName = "Tecnicos";
  static idColumn = ["CdTecnico"];

  CdTecnico!: number;
  NmTecnico!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdTecnico",
      "NmTecnico",
      "FgAtivo",
      ];
  }
}

Tecnicos.knex(connections.plano);

export type TTecnicos = ModelObject<Tecnicos>;
