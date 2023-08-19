import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObservacaoRat extends ModelBase {
  static tableName = "ObservacaoRAT";
  static idColumn = [];

  CdFilial!: number;
  NumeroRAT!: number;
  Ocorrencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumeroRAT",
      "Ocorrencia",
      "Observacao",
      ];
  }
}

ObservacaoRat.knex(connections.plano);

export type TObservacaoRat = ModelObject<ObservacaoRat>;
