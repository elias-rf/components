import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BlocoXEstoque extends ModelBase {
  static tableName = "BlocoXEstoque";
  static idColumn = [];

  CNPJFilial!: string;
  NumECF!: number;
  NumSerie!: string;
  DtBase!: Date;
  Situacao!: string;
  StatusRetorno!: string;
  Recibo!: string;
  

  static getFields() {
    return [
      "CNPJFilial",
      "NumECF",
      "NumSerie",
      "DtBase",
      "Situacao",
      "StatusRetorno",
      "Recibo",
      ];
  }
}

BlocoXEstoque.knex(connections.plano);

export type TBlocoXEstoque = ModelObject<BlocoXEstoque>;
