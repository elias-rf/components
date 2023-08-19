import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Deposito extends ModelBase {
  static tableName = "Deposito";
  static idColumn = [];

  CdBanco!: number;
  CdAgencia!: number;
  NumConta!: string;
  DtDeposito!: Date;
  SeqDep!: number;
  Finalidade!: string;
  VlDinheiro!: number;
  VlChequePraca!: number;
  VlChequeOutros!: number;
  CdFilialAssociada!: number;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtDeposito",
      "SeqDep",
      "Finalidade",
      "VlDinheiro",
      "VlChequePraca",
      "VlChequeOutros",
      "CdFilialAssociada",
      "FgSituacao",
      ];
  }
}

Deposito.knex(connections.plano);

export type TDeposito = ModelObject<Deposito>;
