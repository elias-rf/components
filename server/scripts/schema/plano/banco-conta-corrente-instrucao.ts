import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class BancoContaCorrenteInstrucao extends ModelBase {
  static tableName = "BancoContaCorrenteInstrucao";
  static idColumn = [];

  NumBanco!: number;
  NumAgencia!: number;
  NumContaCorrente!: string;
  Sequencia!: number;
  Instrucao!: string;
  

  static getFields() {
    return [
      "NumBanco",
      "NumAgencia",
      "NumContaCorrente",
      "Sequencia",
      "Instrucao",
      ];
  }
}

BancoContaCorrenteInstrucao.knex(connections.plano);

export type TBancoContaCorrenteInstrucao = ModelObject<BancoContaCorrenteInstrucao>;
