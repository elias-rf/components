import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsRetornoCotacao extends ModelBase {
  static tableName = "ObsRetornoCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  CdFornecedor!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "CdFornecedor",
      "Observacao",
      ];
  }
}

ObsRetornoCotacao.knex(connections.plano);

export type TObsRetornoCotacao = ModelObject<ObsRetornoCotacao>;
