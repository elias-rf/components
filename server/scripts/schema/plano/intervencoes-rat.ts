import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class IntervencoesRat extends ModelBase {
  static tableName = "IntervencoesRAT";
  static idColumn = [];

  CdFilial!: number;
  NumeroRAT!: number;
  Sequencia!: number;
  DtIntervencao!: Date;
  HrSaidaEmp!: Date;
  HrChegadaCli!: Date;
  HrInicio!: Date;
  HrTermino!: Date;
  HrSaidaCli!: Date;
  HrChegadaEmp!: Date;
  CdSituacao!: number;
  KmRodado!: number;
  CdTecnico!: number;
  QtdeHoras!: number;
  NumRatAssociado!: number;
  Descricao!: string;
  FgFaturado!: string;
  FgDeslocFaturado!: string;
  CdFase!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumeroRAT",
      "Sequencia",
      "DtIntervencao",
      "HrSaidaEmp",
      "HrChegadaCli",
      "HrInicio",
      "HrTermino",
      "HrSaidaCli",
      "HrChegadaEmp",
      "CdSituacao",
      "KmRodado",
      "CdTecnico",
      "QtdeHoras",
      "NumRatAssociado",
      "Descricao",
      "FgFaturado",
      "FgDeslocFaturado",
      "CdFase",
      ];
  }
}

IntervencoesRat.knex(connections.plano);

export type TIntervencoesRat = ModelObject<IntervencoesRat>;
