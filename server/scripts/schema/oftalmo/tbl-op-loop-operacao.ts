import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLoopOperacao extends ModelBase {
  static tableName = "tbl_OP_Loop_Operacao";
  static idColumn = ["kOpLoopItem"];

  kOpLoopItem!: number;
  fkOpLoop!: string;
  fkOperacao!: number;
  QtdInicial!: number;
  Rejeitos!: number;
  QtdFinal!: number;
  fkFuncionario!: number;
  DataOp!: Date;
  

  static getFields() {
    return [
      "kOpLoopItem",
      "fkOpLoop",
      "fkOperacao",
      "QtdInicial",
      "Rejeitos",
      "QtdFinal",
      "fkFuncionario",
      "DataOp",
      ];
  }
}

TblOpLoopOperacao.knex(connections.oftalmo);

export type TTblOpLoopOperacao = ModelObject<TblOpLoopOperacao>;
