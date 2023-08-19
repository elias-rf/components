import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsMovCreditoCliente extends ModelBase {
  static tableName = "ObsMovCreditoCliente";
  static idColumn = [];

  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  TipoMovimentacao!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDocumento",
      "Serie",
      "TipoMovimentacao",
      "Observacao",
      ];
  }
}

ObsMovCreditoCliente.knex(connections.plano);

export type TObsMovCreditoCliente = ModelObject<ObsMovCreditoCliente>;
