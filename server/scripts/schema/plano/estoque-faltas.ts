import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueFaltas extends ModelBase {
  static tableName = "EstoqueFaltas";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  DtInicial!: Date;
  DtFinal!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "DtInicial",
      "DtFinal",
      ];
  }
}

EstoqueFaltas.knex(connections.plano);

export type TEstoqueFaltas = ModelObject<EstoqueFaltas>;
