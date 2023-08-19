import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpBotaoOperacao extends ModelBase {
  static tableName = "tbl_OP_Botao_Operacao";
  static idColumn = ["kOPBotaoItem"];

  kOPBotaoItem!: number;
  fkOPBotao!: string;
  fkOperacao!: number;
  QtdInicial!: number;
  DataInicial!: Date;
  Rejeitos!: number;
  QtdFinal!: number;
  fkFuncionario!: number;
  

  static getFields() {
    return [
      "kOPBotaoItem",
      "fkOPBotao",
      "fkOperacao",
      "QtdInicial",
      "DataInicial",
      "Rejeitos",
      "QtdFinal",
      "fkFuncionario",
      ];
  }
}

TblOpBotaoOperacao.knex(connections.oftalmo);

export type TTblOpBotaoOperacao = ModelObject<TblOpBotaoOperacao>;
