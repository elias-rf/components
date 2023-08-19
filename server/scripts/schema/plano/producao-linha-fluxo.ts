import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoLinhaFluxo extends ModelBase {
  static tableName = "ProducaoLinhaFluxo";
  static idColumn = [];

  CdLinhaProducao!: number;
  Sequencia!: number;
  CdOperacao!: number;
  FgCondicional!: string;
  FgAmostragem!: string;
  FgRetrabalho!: string;
  FgEtiquetaInterna!: string;
  FgEsterilizacaoInterna!: string;
  FgEsterilizacaoExterna!: string;
  FgContinuidade!: string;
  FgEtiquetaExterna!: string;
  

  static getFields() {
    return [
      "CdLinhaProducao",
      "Sequencia",
      "CdOperacao",
      "FgCondicional",
      "FgAmostragem",
      "FgRetrabalho",
      "FgEtiquetaInterna",
      "FgEsterilizacaoInterna",
      "FgEsterilizacaoExterna",
      "FgContinuidade",
      "FgEtiquetaExterna",
      ];
  }
}

ProducaoLinhaFluxo.knex(connections.plano);

export type TProducaoLinhaFluxo = ModelObject<ProducaoLinhaFluxo>;
