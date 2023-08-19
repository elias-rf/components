import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CotacaoMoedas extends ModelBase {
  static tableName = "CotacaoMoedas";
  static idColumn = [];

  CdMoeda!: string;
  DtCotacao!: Date;
  VlCotacao!: number;
  

  static getFields() {
    return [
      "CdMoeda",
      "DtCotacao",
      "VlCotacao",
      ];
  }
}

CotacaoMoedas.knex(connections.plano);

export type TCotacaoMoedas = ModelObject<CotacaoMoedas>;
