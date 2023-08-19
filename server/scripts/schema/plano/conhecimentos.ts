import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Conhecimentos extends ModelBase {
  static tableName = "Conhecimentos";
  static idColumn = [];

  NumDocumento!: number;
  CdFilial!: number;
  NumPedido!: number;
  NumNota!: number;
  Serie!: string;
  Tipo!: string;
  Data!: Date;
  CdTransportadora!: number;
  Valor!: number;
  FgStatus!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "NumDocumento",
      "CdFilial",
      "NumPedido",
      "NumNota",
      "Serie",
      "Tipo",
      "Data",
      "CdTransportadora",
      "Valor",
      "FgStatus",
      "Modelo",
      ];
  }
}

Conhecimentos.knex(connections.plano);

export type TConhecimentos = ModelObject<Conhecimentos>;
