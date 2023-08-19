import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoEquivalente extends ModelBase {
  static tableName = "ProdutoEquivalente";
  static idColumn = [];

  CdProduto!: string;
  CdProdutoEquivalente!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "CdProdutoEquivalente",
      "DtUltAlteracao",
      ];
  }
}

ProdutoEquivalente.knex(connections.plano);

export type TProdutoEquivalente = ModelObject<ProdutoEquivalente>;
