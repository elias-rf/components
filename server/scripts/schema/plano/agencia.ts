import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Agencia extends ModelBase {
  static tableName = "Agencia";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NmAgencia!: string;
  DVAgencia!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NmAgencia",
      "DVAgencia",
      "FgAtivo",
      ];
  }
}

Agencia.knex(connections.plano);

export type TAgencia = ModelObject<Agencia>;
