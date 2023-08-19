import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MovCreFornecedorObs extends ModelBase {
  static tableName = "MovCreFornecedorObs";
  static idColumn = [];

  CdFornecedor!: number;
  Sequencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFornecedor",
      "Sequencia",
      "Observacao",
      ];
  }
}

MovCreFornecedorObs.knex(connections.plano);

export type TMovCreFornecedorObs = ModelObject<MovCreFornecedorObs>;
