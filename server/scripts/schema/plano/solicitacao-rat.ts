import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SolicitacaoRat extends ModelBase {
  static tableName = "SolicitacaoRat";
  static idColumn = ["CdSolicitacaoRat"];

  CdSolicitacaoRat!: number;
  NumeroRAT!: number;
  Mudanca!: string;
  ResumoMudanca!: string;
  RazoesMudanca!: string;
  PreRequisitos!: string;
  PontosChecagem!: string;
  CdTecnicoDesenv!: number;
  CdTecnicoSolicitacao!: number;
  FgAguardaAprovConteudo!: string;
  FgAguardaAprovOrcamento!: string;
  FgAprovado!: string;
  DataEntregaSol!: Date;
  HorasPrevistas!: number;
  HorasRepassadas!: number;
  DetalheMudanca!: string;
  ObservacaoMudanca!: string;
  

  static getFields() {
    return [
      "CdSolicitacaoRat",
      "NumeroRAT",
      "Mudanca",
      "ResumoMudanca",
      "RazoesMudanca",
      "PreRequisitos",
      "PontosChecagem",
      "CdTecnicoDesenv",
      "CdTecnicoSolicitacao",
      "FgAguardaAprovConteudo",
      "FgAguardaAprovOrcamento",
      "FgAprovado",
      "DataEntregaSol",
      "HorasPrevistas",
      "HorasRepassadas",
      "DetalheMudanca",
      "ObservacaoMudanca",
      ];
  }
}

SolicitacaoRat.knex(connections.plano);

export type TSolicitacaoRat = ModelObject<SolicitacaoRat>;
