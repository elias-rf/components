import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaRecuperacaoStItemMovimentoHistorico extends ModelBase {
  static tableName = "NotaEntradaRecuperacaoSTItemMovimentoHistorico";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  Sequencia!: number;
  CdProduto!: string;
  NumNotaSaida!: number;
  SerieNotaSaida!: string;
  ModeloNotaSaida!: string;
  SequenciaNotaSaida!: number;
  Data!: Date;
  Usuario!: string;
  Historico!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "Sequencia",
      "CdProduto",
      "NumNotaSaida",
      "SerieNotaSaida",
      "ModeloNotaSaida",
      "SequenciaNotaSaida",
      "Data",
      "Usuario",
      "Historico",
      ];
  }
}

NotaEntradaRecuperacaoStItemMovimentoHistorico.knex(connections.plano);

export type TNotaEntradaRecuperacaoStItemMovimentoHistorico = ModelObject<NotaEntradaRecuperacaoStItemMovimentoHistorico>;
