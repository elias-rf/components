import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedApuracao extends ModelBase {
  static tableName = "SpedApuracao";
  static idColumn = [];

  CdFilial!: number;
  Tipo!: string;
  PeriodoApuracao!: Date;
  OrigemCredito!: number;
  CNPJCedente!: number;
  CdTipoCredito!: number;
  VlApuradoAnterior!: number;
  VlExtemporaneoAnterior!: number;
  VlDescontoAnterior!: number;
  VlRessarcimentoAnterior!: number;
  VlDCIAnterior!: number;
  VlDescontoPeriodo!: number;
  VlRessarcimentoPeriodo!: number;
  VlDCIPeriodo!: number;
  VlTransferido!: number;
  VlOutrasFormas!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "Tipo",
      "PeriodoApuracao",
      "OrigemCredito",
      "CNPJCedente",
      "CdTipoCredito",
      "VlApuradoAnterior",
      "VlExtemporaneoAnterior",
      "VlDescontoAnterior",
      "VlRessarcimentoAnterior",
      "VlDCIAnterior",
      "VlDescontoPeriodo",
      "VlRessarcimentoPeriodo",
      "VlDCIPeriodo",
      "VlTransferido",
      "VlOutrasFormas",
      ];
  }
}

SpedApuracao.knex(connections.plano);

export type TSpedApuracao = ModelObject<SpedApuracao>;
