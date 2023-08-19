import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RetencaoImposto extends ModelBase {
  static tableName = "RetencaoImposto";
  static idColumn = [];

  CdFilial!: number;
  CNPJ!: number;
  Tipo!: string;
  NumDocumentoCredito!: number;
  SerieCredito!: string;
  DtCredito!: Date;
  VlCredito!: number;
  NumDocumentoDebito!: number;
  SerieDebito!: string;
  DtDebito!: Date;
  VlDebito!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CNPJ",
      "Tipo",
      "NumDocumentoCredito",
      "SerieCredito",
      "DtCredito",
      "VlCredito",
      "NumDocumentoDebito",
      "SerieDebito",
      "DtDebito",
      "VlDebito",
      ];
  }
}

RetencaoImposto.knex(connections.plano);

export type TRetencaoImposto = ModelObject<RetencaoImposto>;
