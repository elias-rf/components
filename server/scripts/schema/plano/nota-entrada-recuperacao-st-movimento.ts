import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaRecuperacaoStMovimento extends ModelBase {
  static tableName = "NotaEntradaRecuperacaoSTMovimento";
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
      "Quantidade",
      "FgSituacao",
      ];
  }
}

NotaEntradaRecuperacaoStMovimento.knex(connections.plano);

export type TNotaEntradaRecuperacaoStMovimento = ModelObject<NotaEntradaRecuperacaoStMovimento>;
