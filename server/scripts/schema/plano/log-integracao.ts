import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LogIntegracao extends ModelBase {
  static tableName = "LogIntegracao";
  static idColumn = ["CdEmpresa"];

  CdEmpresa!: number;
  CdFilial!: number;
  DHArquivo!: Date;
  IdEquipamento!: string;
  EnderecoEmail!: string;
  QtdeArquivos!: number;
  Mensagem!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "DHArquivo",
      "IdEquipamento",
      "EnderecoEmail",
      "QtdeArquivos",
      "Mensagem",
      ];
  }
}

LogIntegracao.knex(connections.plano);

export type TLogIntegracao = ModelObject<LogIntegracao>;
