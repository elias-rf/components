import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CupomFiscalTefItem extends ModelBase {
  static tableName = "CupomFiscalTEFItem";
  static idColumn = [];

  CdFilial!: number;
  NumECF!: number;
  NumCupom!: number;
  Sequencia!: number;
  TipoCampo!: number;
  Conteudo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumECF",
      "NumCupom",
      "Sequencia",
      "TipoCampo",
      "Conteudo",
      ];
  }
}

CupomFiscalTefItem.knex(connections.plano);

export type TCupomFiscalTefItem = ModelObject<CupomFiscalTefItem>;
