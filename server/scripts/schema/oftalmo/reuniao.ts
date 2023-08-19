import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Reuniao extends ModelBase {
  static tableName = "reuniao";
  static idColumn = ["id"];

  id!: number;
  solicitante!: string;
  data!: Date;
  inicio!: Date;
  fim!: Date;
  participantes!: number;
  cafe!: number;
  

  static getFields() {
    return [
      "id",
      "solicitante",
      "data",
      "inicio",
      "fim",
      "participantes",
      "cafe",
      ];
  }
}

Reuniao.knex(connections.oftalmo);

export type TReuniao = ModelObject<Reuniao>;
