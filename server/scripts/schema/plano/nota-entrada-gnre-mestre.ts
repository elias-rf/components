import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaGnreMestre extends ModelBase {
  static tableName = "NotaEntradaGNREMestre";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  PercMinimoICMSSub!: number;
  VlPrincipal!: number;
  VlAtualizacaoMonetaria!: number;
  VlJuros!: number;
  VlMulta!: number;
  DtRecolhimento!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "PercMinimoICMSSub",
      "VlPrincipal",
      "VlAtualizacaoMonetaria",
      "VlJuros",
      "VlMulta",
      "DtRecolhimento",
      "DtUltAlteracao",
      ];
  }
}

NotaEntradaGnreMestre.knex(connections.plano);

export type TNotaEntradaGnreMestre = ModelObject<NotaEntradaGnreMestre>;
