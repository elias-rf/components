import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Rotulos extends ModelBase {
  static tableName = "Rotulos";
  static idColumn = [];

  NumPedido!: number;
  CdRotulo!: number;
  CdProduto!: string;
  Conteudo!: string;
  CRM!: string;
  

  static getFields() {
    return [
      "NumPedido",
      "CdRotulo",
      "CdProduto",
      "Conteudo",
      "CRM",
      ];
  }
}

Rotulos.knex(connections.plano);

export type TRotulos = ModelObject<Rotulos>;
