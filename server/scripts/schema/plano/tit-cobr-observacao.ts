import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TitCobrObservacao extends ModelBase {
  static tableName = "TitCobrObservacao";
  static idColumn = [];

  CdFilial!: number;
  NrDoc!: number;
  Serie!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NrDoc",
      "Serie",
      "SiglaDoc",
      "ItemDoc",
      "Observacao",
      ];
  }
}

TitCobrObservacao.knex(connections.plano);

export type TTitCobrObservacao = ModelObject<TitCobrObservacao>;
