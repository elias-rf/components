import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Financeiras extends ModelBase {
  static tableName = "Financeiras";
  static idColumn = ["CdFinanceira"];

  CdFinanceira!: number;
  Descricao!: string;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdFinanceira",
      "Descricao",
      "DtUltAtualizacao",
      ];
  }
}

Financeiras.knex(connections.plano);

export type TFinanceiras = ModelObject<Financeiras>;
