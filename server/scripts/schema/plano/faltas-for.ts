import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FaltasFor extends ModelBase {
  static tableName = "FaltasFor";
  static idColumn = [];

  CdFornecedor!: number;
  CdReferencia!: string;
  CdProduto!: string;
  Descricao!: string;
  PrecoV!: number;
  PrecoF!: number;
  

  static getFields() {
    return [
      "CdFornecedor",
      "CdReferencia",
      "CdProduto",
      "Descricao",
      "PrecoV",
      "PrecoF",
      ];
  }
}

FaltasFor.knex(connections.plano);

export type TFaltasFor = ModelObject<FaltasFor>;
