import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoAssistencia extends ModelBase {
  static tableName = "ProdutoAssistencia";
  static idColumn = [];

  CdProduto!: string;
  CdAssistencia!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "CdAssistencia",
      ];
  }
}

ProdutoAssistencia.knex(connections.plano);

export type TProdutoAssistencia = ModelObject<ProdutoAssistencia>;
