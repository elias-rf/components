import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FornecedorCentroCusto extends ModelBase {
  static tableName = "FornecedorCentroCusto";
  static idColumn = [];

  CdFornecedor!: number;
  CdCentroCusto!: number;
  Percentual!: number;
  

  static getFields() {
    return [
      "CdFornecedor",
      "CdCentroCusto",
      "Percentual",
      ];
  }
}

FornecedorCentroCusto.knex(connections.plano);

export type TFornecedorCentroCusto = ModelObject<FornecedorCentroCusto>;
