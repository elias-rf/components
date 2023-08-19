import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreCotacao extends ModelBase {
  static tableName = "MestreCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  DtCotacao!: Date;
  NumRequisicao!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "DtCotacao",
      "NumRequisicao",
      ];
  }
}

MestreCotacao.knex(connections.plano);

export type TMestreCotacao = ModelObject<MestreCotacao>;
