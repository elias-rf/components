import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicoAmiVida extends ModelBase {
  static tableName = "MedicoAMIVida";
  static idColumn = ["CRM"];

  CRM!: string;
  FgEnvioMaterial!: string;
  FgEnvioBrindes!: string;
  FgRelAcompanhamento!: string;
  

  static getFields() {
    return [
      "CRM",
      "FgEnvioMaterial",
      "FgEnvioBrindes",
      "FgRelAcompanhamento",
      ];
  }
}

MedicoAmiVida.knex(connections.plano);

export type TMedicoAmiVida = ModelObject<MedicoAmiVida>;
