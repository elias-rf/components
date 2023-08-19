import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueEscrituradoCorrecao extends ModelBase {
  static tableName = "EstoqueEscrituradoCorrecao";
  static idColumn = [];

  MesBase!: number;
  AnoBase!: number;
  DtPeriodoCorrecao!: Date;
  CdProduto!: string;
  CdIndEstoque!: number;
  TipoParticipante!: string;
  CdParticipante!: number;
  QtdePositivo!: number;
  QtdeNegativo!: number;
  CdFilial!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "MesBase",
      "AnoBase",
      "DtPeriodoCorrecao",
      "CdProduto",
      "CdIndEstoque",
      "TipoParticipante",
      "CdParticipante",
      "QtdePositivo",
      "QtdeNegativo",
      "CdFilial",
      "DtUltAlteracao",
      ];
  }
}

EstoqueEscrituradoCorrecao.knex(connections.plano);

export type TEstoqueEscrituradoCorrecao = ModelObject<EstoqueEscrituradoCorrecao>;
