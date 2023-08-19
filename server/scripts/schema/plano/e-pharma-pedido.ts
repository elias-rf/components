import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EPharmaPedido extends ModelBase {
  static tableName = "ePharmaPedido";
  static idColumn = ["NumAutorizacao"];

  NumAutorizacao!: number;
  DtAutorizacao!: Date;
  NumeroTransacao!: number;
  DtValidadeAutorizacao!: Date;
  NmPaciente!: string;
  SaldoCartao!: number;
  DtValidadeSaldo!: Date;
  NumCOO!: number;
  NumDoc!: number;
  Serie!: string;
  DtMovimento!: Date;
  DtConciliacao!: Date;
  DtPagamento!: Date;
  FgConciliacao!: string;
  

  static getFields() {
    return [
      "NumAutorizacao",
      "DtAutorizacao",
      "NumeroTransacao",
      "DtValidadeAutorizacao",
      "NmPaciente",
      "SaldoCartao",
      "DtValidadeSaldo",
      "NumCOO",
      "NumDoc",
      "Serie",
      "DtMovimento",
      "DtConciliacao",
      "DtPagamento",
      "FgConciliacao",
      ];
  }
}

EPharmaPedido.knex(connections.plano);

export type TEPharmaPedido = ModelObject<EPharmaPedido>;
