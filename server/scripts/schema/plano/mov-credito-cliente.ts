import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MovCreditoCliente extends ModelBase {
  static tableName = "MovCreditoCliente";
  static idColumn = [];

  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  TipoMovimentacao!: string;
  CdCliente!: number;
  DtLcto!: Date;
  VlCredito!: number;
  CdUsuario!: string;
  DtOcorrencia!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDocumento",
      "Serie",
      "TipoMovimentacao",
      "CdCliente",
      "DtLcto",
      "VlCredito",
      "CdUsuario",
      "DtOcorrencia",
      ];
  }
}

MovCreditoCliente.knex(connections.plano);

export type TMovCreditoCliente = ModelObject<MovCreditoCliente>;
