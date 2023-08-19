import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutosCodAuxiliar extends ModelBase {
  static tableName = "ProdutosCodAuxiliar";
  static idColumn = [];

  CdProduto!: string;
  CdAuxiliar!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "CdAuxiliar",
      "DtUltAlteracao",
      ];
  }
}

ProdutosCodAuxiliar.knex(connections.plano);

export type TProdutosCodAuxiliar = ModelObject<ProdutosCodAuxiliar>;
