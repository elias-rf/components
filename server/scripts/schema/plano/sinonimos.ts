import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Sinonimos extends ModelBase {
  static tableName = "Sinonimos";
  static idColumn = [];

  Sinonimo!: string;
  CdProdutoAssociado!: string;
  

  static getFields() {
    return [
      "Sinonimo",
      "CdProdutoAssociado",
      ];
  }
}

Sinonimos.knex(connections.plano);

export type TSinonimos = ModelObject<Sinonimos>;
