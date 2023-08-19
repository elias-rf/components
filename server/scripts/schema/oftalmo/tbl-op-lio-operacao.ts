import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLioOperacao extends ModelBase {
  static tableName = "tbl_OP_LIO_Operacao";
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

TblOpLioOperacao.knex(connections.oftalmo);

export type TTblOpLioOperacao = ModelObject<TblOpLioOperacao>;
