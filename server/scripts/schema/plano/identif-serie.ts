import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class IdentifSerie extends ModelBase {
  static tableName = "IdentifSerie";
  static idColumn = [];

  CdProduto!: string;
  NumSerieProduto!: string;
  DtLimiteGarantia!: Date;
  Prazo!: number;
  DtLimiteGarantiaVenda!: Date;
  Status!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "NumSerieProduto",
      "DtLimiteGarantia",
      "Prazo",
      "DtLimiteGarantiaVenda",
      "Status",
      ];
  }
}

IdentifSerie.knex(connections.plano);

export type TIdentifSerie = ModelObject<IdentifSerie>;
