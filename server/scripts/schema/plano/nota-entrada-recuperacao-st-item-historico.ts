import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaRecuperacaoStItemHistorico extends ModelBase {
  static tableName = "NotaEntradaRecuperacaoSTItemHistorico";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  Sequencia!: number;
  CdProduto!: string;
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
      "Data",
      "Usuario",
      "Historico",
      ];
  }
}

NotaEntradaRecuperacaoStItemHistorico.knex(connections.plano);

export type TNotaEntradaRecuperacaoStItemHistorico = ModelObject<NotaEntradaRecuperacaoStItemHistorico>;
