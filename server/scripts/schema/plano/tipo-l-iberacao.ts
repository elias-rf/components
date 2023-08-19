import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoLIberacao extends ModelBase {
  static tableName = "TipoLIberacao";
  static idColumn = ["CdTipoLiberacao"];

  CdTipoLiberacao!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdTipoLiberacao",
      "Descricao",
      ];
  }
}

TipoLIberacao.knex(connections.plano);

export type TTipoLIberacao = ModelObject<TipoLIberacao>;
