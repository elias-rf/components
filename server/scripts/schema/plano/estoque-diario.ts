import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueDiario extends ModelBase {
  static tableName = "EstoqueDiario";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  DtBase!: Date;
  QtdeEstoque!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "DtBase",
      "QtdeEstoque",
      ];
  }
}

EstoqueDiario.knex(connections.plano);

export type TEstoqueDiario = ModelObject<EstoqueDiario>;
