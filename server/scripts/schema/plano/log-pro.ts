import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LogPro extends ModelBase {
  static tableName = "LogPro";
  static idColumn = [];

  CdProduto!: string;
  CdEmpresa!: number;
  DtPromocaoFinal!: Date;
  DtPromocaoInicial!: Date;
  TipLog!: string;
  VlValor!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "CdEmpresa",
      "DtPromocaoFinal",
      "DtPromocaoInicial",
      "TipLog",
      "VlValor",
      ];
  }
}

LogPro.knex(connections.plano);

export type TLogPro = ModelObject<LogPro>;
