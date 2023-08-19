import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProObservacao extends ModelBase {
  static tableName = "CadProObservacao";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  DtUltAlteracao!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "DtUltAlteracao",
      "Observacao",
      ];
  }
}

CadProObservacao.knex(connections.plano);

export type TCadProObservacao = ModelObject<CadProObservacao>;
