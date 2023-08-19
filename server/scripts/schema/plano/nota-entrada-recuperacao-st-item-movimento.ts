import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaRecuperacaoStItemMovimento extends ModelBase {
  static tableName = "NotaEntradaRecuperacaoSTItemMovimento";
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
  Quantidade!: number;
  FgSituacao!: string;
  

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
      "Quantidade",
      "FgSituacao",
      ];
  }
}

NotaEntradaRecuperacaoStItemMovimento.knex(connections.plano);

export type TNotaEntradaRecuperacaoStItemMovimento = ModelObject<NotaEntradaRecuperacaoStItemMovimento>;
