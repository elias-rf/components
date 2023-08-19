import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedControleCreditoUtilizado extends ModelBase {
  static tableName = "SpedControleCreditoUtilizado";
  static idColumn = [];

  Cnpj!: number;
  PeriodoApuracao!: Date;
  PeriodoUtilizacao!: Date;
  TipoImposto!: string;
  CdCredito!: number;
  VlCreditoUtilizado!: number;
  DtGeracao!: Date;
  

  static getFields() {
    return [
      "Cnpj",
      "PeriodoApuracao",
      "PeriodoUtilizacao",
      "TipoImposto",
      "CdCredito",
      "VlCreditoUtilizado",
      "DtGeracao",
      ];
  }
}

SpedControleCreditoUtilizado.knex(connections.plano);

export type TSpedControleCreditoUtilizado = ModelObject<SpedControleCreditoUtilizado>;
