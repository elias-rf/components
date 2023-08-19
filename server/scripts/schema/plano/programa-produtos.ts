import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProgramaProdutos extends ModelBase {
  static tableName = "ProgramaProdutos";
  static idColumn = [];

  CdPrograma!: number;
  CdProduto!: string;
  

  static getFields() {
    return [
      "CdPrograma",
      "CdProduto",
      ];
  }
}

ProgramaProdutos.knex(connections.plano);

export type TProgramaProdutos = ModelObject<ProgramaProdutos>;
