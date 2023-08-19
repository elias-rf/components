import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoEtiquetaInterna extends ModelBase {
  static tableName = "ProducaoEtiquetaInterna";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  Sequencia!: number;
  DtEmissao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "Sequencia",
      "DtEmissao",
      ];
  }
}

ProducaoEtiquetaInterna.knex(connections.plano);

export type TProducaoEtiquetaInterna = ModelObject<ProducaoEtiquetaInterna>;
