import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RetornoCotacao extends ModelBase {
  static tableName = "RetornoCotacao";
  static idColumn = [];

  CdFilial!: number;
  NumCotacao!: number;
  CdFornecedor!: number;
  DtCotacao!: Date;
  PrazoPgto!: string;
  PrazoEntrega!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumCotacao",
      "CdFornecedor",
      "DtCotacao",
      "PrazoPgto",
      "PrazoEntrega",
      ];
  }
}

RetornoCotacao.knex(connections.plano);

export type TRetornoCotacao = ModelObject<RetornoCotacao>;
