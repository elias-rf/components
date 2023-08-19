import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CancelamentoCupomSituacaoDiferente extends ModelBase {
  static tableName = "CancelamentoCupomSituacaoDiferente";
  static idColumn = [];

  CdFilial!: number;
  NroPDV!: number;
  NumCupom!: number;
  DtLancamento!: Date;
  Usuario!: string;
  Motivo!: string;
  Observacao!: string;
  SerieNotaReferente!: string;
  ModeloNotaReferente!: string;
  NumNotaReferente!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NroPDV",
      "NumCupom",
      "DtLancamento",
      "Usuario",
      "Motivo",
      "Observacao",
      "SerieNotaReferente",
      "ModeloNotaReferente",
      "NumNotaReferente",
      "DtUltAlteracao",
      ];
  }
}

CancelamentoCupomSituacaoDiferente.knex(connections.plano);

export type TCancelamentoCupomSituacaoDiferente = ModelObject<CancelamentoCupomSituacaoDiferente>;
