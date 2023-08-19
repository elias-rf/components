import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsItemRetornoCotacao extends ModelBase {
  static tableName = "ObsItemRetornoCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  CdFornecedor!: number;
  Sequencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "CdFornecedor",
      "Sequencia",
      "Observacao",
      ];
  }
}

ObsItemRetornoCotacao.knex(connections.plano);

export type TObsItemRetornoCotacao = ModelObject<ObsItemRetornoCotacao>;
