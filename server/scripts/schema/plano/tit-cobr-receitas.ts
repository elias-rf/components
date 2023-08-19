import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TitCobrReceitas extends ModelBase {
  static tableName = "TitCobrReceitas";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  NumContaReceita!: number;
  Percentual!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "Modelo",
      "SiglaDoc",
      "ItemDoc",
      "NumContaReceita",
      "Percentual",
      "DtUltAlteracao",
      ];
  }
}

TitCobrReceitas.knex(connections.plano);

export type TTitCobrReceitas = ModelObject<TitCobrReceitas>;
