import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContasReceberChequeDeposito extends ModelBase {
  static tableName = "ContasReceberChequeDeposito";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDocumento!: string;
  ItemDocumento!: number;
  CdBancoDeposito!: number;
  CdAgenciaDeposito!: number;
  NumContaDeposito!: string;
  NumLancamentoDeposito!: number;
  DtInclusao!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumDocumento",
      "Serie",
      "Modelo",
      "SiglaDocumento",
      "ItemDocumento",
      "CdBancoDeposito",
      "CdAgenciaDeposito",
      "NumContaDeposito",
      "NumLancamentoDeposito",
      "DtInclusao",
      "DtUltAlteracao",
      ];
  }
}

ContasReceberChequeDeposito.knex(connections.plano);

export type TContasReceberChequeDeposito = ModelObject<ContasReceberChequeDeposito>;
