import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class DiasSemEstoque extends ModelBase {
  static tableName = "DiasSemEstoque";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  DtInicioFalta!: Date;
  DtReposicao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "DtInicioFalta",
      "DtReposicao",
      ];
  }
}

DiasSemEstoque.knex(connections.plano);

export type TDiasSemEstoque = ModelObject<DiasSemEstoque>;
