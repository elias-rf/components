import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LancCheque extends ModelBase {
  static tableName = "LancCheque";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  NumCheque!: number;
  CdFilial!: number;
  CdFornecedor!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  SeqDoc!: number;
  VlBruto!: number;
  VlAbatimento!: number;
  VlAcrescimo!: number;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "NumCheque",
      "CdFilial",
      "CdFornecedor",
      "NumDoc",
      "Serie",
      "Modelo",
      "SeqDoc",
      "VlBruto",
      "VlAbatimento",
      "VlAcrescimo",
      "FgSituacao",
      ];
  }
}

LancCheque.knex(connections.plano);

export type TLancCheque = ModelObject<LancCheque>;
