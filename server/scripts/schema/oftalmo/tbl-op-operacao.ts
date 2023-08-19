import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpOperacao extends ModelBase {
  static tableName = "tbl_OP_Operacao";
  static idColumn = [];

  kOperacao!: number;
  Descricao!: string;
  Grupo!: number;
  Ordem!: number;
  ehRetrabalho!: number;
  

  static getFields() {
    return [
      "kOperacao",
      "Descricao",
      "Grupo",
      "Ordem",
      "ehRetrabalho",
      ];
  }
}

TblOpOperacao.knex(connections.oftalmo);

export type TTblOpOperacao = ModelObject<TblOpOperacao>;
