import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SubstituicaoProd extends ModelBase {
  static tableName = "SubstituicaoProd";
  static idColumn = [];

  CdProduto!: string;
  CdAssociado!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "CdAssociado",
      ];
  }
}

SubstituicaoProd.knex(connections.plano);

export type TSubstituicaoProd = ModelObject<SubstituicaoProd>;
