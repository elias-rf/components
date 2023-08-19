import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MovCreClienteObs extends ModelBase {
  static tableName = "MovCreClienteObs";
  static idColumn = [];

  CdCliente!: number;
  Sequencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "Sequencia",
      "Observacao",
      ];
  }
}

MovCreClienteObs.knex(connections.plano);

export type TMovCreClienteObs = ModelObject<MovCreClienteObs>;
