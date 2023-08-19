import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedReceitaBruta extends ModelBase {
  static tableName = "SpedReceitaBruta";
  static idColumn = [];

  CNPJCentralizador!: number;
  PeriodoApuracao!: Date;
  VlTributadoInterno!: number;
  VlNaoTributadoIterno!: number;
  VlExportacao!: number;
  VlReceitaCumulativa!: number;
  VlReceitaBruta!: number;
  

  static getFields() {
    return [
      "CNPJCentralizador",
      "PeriodoApuracao",
      "VlTributadoInterno",
      "VlNaoTributadoIterno",
      "VlExportacao",
      "VlReceitaCumulativa",
      "VlReceitaBruta",
      ];
  }
}

SpedReceitaBruta.knex(connections.plano);

export type TSpedReceitaBruta = ModelObject<SpedReceitaBruta>;
