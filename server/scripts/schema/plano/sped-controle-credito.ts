import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedControleCredito extends ModelBase {
  static tableName = "SpedControleCredito";
  static idColumn = [];

  Cnpj!: number;
  PeriodoApuracao!: Date;
  TipoImposto!: string;
  CdCredito!: number;
  VlCreditoPeriodo!: number;
  VlDebitoPeriodo!: number;
  VlResultadoPeriodo!: number;
  VlSaldoCredito!: number;
  VlUtilizadoForaPeriodo!: number;
  DtGeracao!: Date;
  

  static getFields() {
    return [
      "Cnpj",
      "PeriodoApuracao",
      "TipoImposto",
      "CdCredito",
      "VlCreditoPeriodo",
      "VlDebitoPeriodo",
      "VlResultadoPeriodo",
      "VlSaldoCredito",
      "VlUtilizadoForaPeriodo",
      "DtGeracao",
      ];
  }
}

SpedControleCredito.knex(connections.plano);

export type TSpedControleCredito = ModelObject<SpedControleCredito>;
