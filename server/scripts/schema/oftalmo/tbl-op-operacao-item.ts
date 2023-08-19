import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpOperacaoItem extends ModelBase {
  static tableName = "tbl_OP_Operacao_Item";
  static idColumn = ["kOpLIOItem"];

  kOpLIOItem!: number;
  fkOpLIO!: number;
  fkOperacao!: number;
  QtdInicial!: number;
  Rejeitos!: number;
  Retrabalho!: number;
  QtdFinal!: number;
  fkFuncionario!: number;
  DataOp!: Date;
  ViaFilha!: number;
  

  static getFields() {
    return [
      "kOpLIOItem",
      "fkOpLIO",
      "fkOperacao",
      "QtdInicial",
      "Rejeitos",
      "Retrabalho",
      "QtdFinal",
      "fkFuncionario",
      "DataOp",
      "ViaFilha",
      ];
  }
}

TblOpOperacaoItem.knex(connections.oftalmo);

export type TTblOpOperacaoItem = ModelObject<TblOpOperacaoItem>;
