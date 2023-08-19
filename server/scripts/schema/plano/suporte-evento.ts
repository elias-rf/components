import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SuporteEvento extends ModelBase {
  static tableName = "SuporteEvento";
  static idColumn = [];

  Usuario!: string;
  Data!: Date;
  Evento!: string;
  

  static getFields() {
    return [
      "Usuario",
      "Data",
      "Evento",
      ];
  }
}

SuporteEvento.knex(connections.plano);

export type TSuporteEvento = ModelObject<SuporteEvento>;
