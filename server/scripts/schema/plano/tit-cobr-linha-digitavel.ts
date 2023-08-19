import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TitCobrLinhaDigitavel extends ModelBase {
  static tableName = "TitCobrLinhaDigitavel";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  LinhaDigitavel!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumDoc",
      "Serie",
      "Modelo",
      "SiglaDoc",
      "ItemDoc",
      "LinhaDigitavel",
      ];
  }
}

TitCobrLinhaDigitavel.knex(connections.plano);

export type TTitCobrLinhaDigitavel = ModelObject<TitCobrLinhaDigitavel>;
