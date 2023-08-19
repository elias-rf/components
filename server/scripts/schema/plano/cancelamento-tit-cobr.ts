import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentoTitCobr extends ModelBase {
  static tableName = "CancelamentoTitCobr";
  static idColumn = [];

  CdFilial!: number;
  SiglaDoc!: string;
  NrDoc!: number;
  Serie!: string;
  ItemDoc!: number;
  Motivo!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "SiglaDoc",
      "NrDoc",
      "Serie",
      "ItemDoc",
      "Motivo",
      "Modelo",
      ];
  }
}

CancelamentoTitCobr.knex(connections.plano);

export type TCancelamentoTitCobr = ModelObject<CancelamentoTitCobr>;
