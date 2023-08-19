import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsMestreCotacao extends ModelBase {
  static tableName = "ObsMestreCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "Observacao",
      ];
  }
}

ObsMestreCotacao.knex(connections.plano);

export type TObsMestreCotacao = ModelObject<ObsMestreCotacao>;
