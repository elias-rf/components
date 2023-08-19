import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoEtiquetaExterna extends ModelBase {
  static tableName = "ProducaoEtiquetaExterna";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  Sequencia!: number;
  DtEmissao!: Date;
  NumControle!: number;
  FgAtualizacao!: string;
  Quantidade!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "Sequencia",
      "DtEmissao",
      "NumControle",
      "FgAtualizacao",
      "Quantidade",
      ];
  }
}

ProducaoEtiquetaExterna.knex(connections.plano);

export type TProducaoEtiquetaExterna = ModelObject<ProducaoEtiquetaExterna>;
