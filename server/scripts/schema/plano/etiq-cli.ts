import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EtiqCli extends ModelBase {
  static tableName = "EtiqCli";
  static idColumn = [];

  CdCliente!: number;
  Tipo!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "Tipo",
      ];
  }
}

EtiqCli.knex(connections.plano);

export type TEtiqCli = ModelObject<EtiqCli>;
