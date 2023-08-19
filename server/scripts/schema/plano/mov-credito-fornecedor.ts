import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MovCreditoFornecedor extends ModelBase {
  static tableName = "MovCreditoFornecedor";
  static idColumn = [];

  CdFornecedor!: number;
  Sequencia!: number;
  NumDocOrigem!: number;
  NumDocDestino!: number;
  VlCredito!: number;
  VlDebito!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFornecedor",
      "Sequencia",
      "NumDocOrigem",
      "NumDocDestino",
      "VlCredito",
      "VlDebito",
      "Observacao",
      ];
  }
}

MovCreditoFornecedor.knex(connections.plano);

export type TMovCreditoFornecedor = ModelObject<MovCreditoFornecedor>;
