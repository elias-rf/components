import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class DepositoClasse extends ModelBase {
  static tableName = "DepositoClasse";
  static idColumn = [];

  CdEmpresa!: number;
  CdBanco!: number;
  CdAgencia!: string;
  NumConta!: string;
  DtDeposito!: Date;
  SeqDep!: number;
  NumContaClasse!: number;
  Percentual!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtDeposito",
      "SeqDep",
      "NumContaClasse",
      "Percentual",
      ];
  }
}

DepositoClasse.knex(connections.plano);

export type TDepositoClasse = ModelObject<DepositoClasse>;
