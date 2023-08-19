import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SegmentosProdutos extends ModelBase {
  static tableName = "SegmentosProdutos";
  static idColumn = [];

  CdProduto!: string;
  CdSegmento!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "CdSegmento",
      ];
  }
}

SegmentosProdutos.knex(connections.plano);

export type TSegmentosProdutos = ModelObject<SegmentosProdutos>;
