import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContFor extends ModelBase {
  static tableName = "ContFor";
  static idColumn = [];

  CdFornecedor!: number;
  NumSequencia!: number;
  NmContato!: string;
  Telefone!: string;
  Ramal!: number;
  Cargo!: string;
  

  static getFields() {
    return [
      "CdFornecedor",
      "NumSequencia",
      "NmContato",
      "Telefone",
      "Ramal",
      "Cargo",
      ];
  }
}

ContFor.knex(connections.plano);

export type TContFor = ModelObject<ContFor>;
