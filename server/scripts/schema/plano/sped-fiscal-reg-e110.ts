import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedFiscalRegE110 extends ModelBase {
  static tableName = "SpedFiscalRegE110";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  DtBase!: Date;
  VlAjusteDebito!: number;
  VlAjusteDebitoTotal!: number;
  VlEstornoCredito!: number;
  VlAjusteCredito!: number;
  VlAjusteCreditoTotal!: number;
  VlEstornoDebito!: number;
  VlSaldoCredorAnterior!: number;
  VlTotalDeducoes!: number;
  VlExtraApuracao!: number;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "DtBase",
      "VlAjusteDebito",
      "VlAjusteDebitoTotal",
      "VlEstornoCredito",
      "VlAjusteCredito",
      "VlAjusteCreditoTotal",
      "VlEstornoDebito",
      "VlSaldoCredorAnterior",
      "VlTotalDeducoes",
      "VlExtraApuracao",
      "DtUltAtualizacao",
      ];
  }
}

SpedFiscalRegE110.knex(connections.plano);

export type TSpedFiscalRegE110 = ModelObject<SpedFiscalRegE110>;
