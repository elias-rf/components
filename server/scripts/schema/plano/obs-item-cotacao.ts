import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsItemCotacao extends ModelBase {
  static tableName = "ObsItemCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  Sequencia!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "Sequencia",
      "Observacao",
      ];
  }
}

ObsItemCotacao.knex(connections.plano);

export type TObsItemCotacao = ModelObject<ObsItemCotacao>;
