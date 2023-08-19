import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaHistoricoSt extends ModelBase {
  static tableName = "NotaEntradaHistoricoST";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdProduto!: string;
  DtOcorrencia!: Date;
  NumNota!: number;
  SerieNota!: string;
  ModeloNota!: string;
  CdFornecedor!: number;
  Quantidade!: number;
  VlBaseCalculoST!: number;
  VlICMSST!: number;
  FgSituacaoNota!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdProduto",
      "DtOcorrencia",
      "NumNota",
      "SerieNota",
      "ModeloNota",
      "CdFornecedor",
      "Quantidade",
      "VlBaseCalculoST",
      "VlICMSST",
      "FgSituacaoNota",
      ];
  }
}

NotaEntradaHistoricoSt.knex(connections.plano);

export type TNotaEntradaHistoricoSt = ModelObject<NotaEntradaHistoricoSt>;
