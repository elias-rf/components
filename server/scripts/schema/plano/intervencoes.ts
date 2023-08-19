import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Intervencoes extends ModelBase {
  static tableName = "Intervencoes";
  static idColumn = [];

  CdCliente!: number;
  CdIntervencao!: string;
  data!: Date;
  PRM!: string;
  PrmTipo!: string;
  Manifestado!: string;
  Causa!: string;
  Comunicacao!: string;
  DiasComunicacao!: string;
  Resolucao!: string;
  Resultado!: string;
  SituacaoResultado!: string;
  QtdeMedicamentos!: number;
  QtdeVisitas!: number;
  Ocorrencia!: string;
  Farmaceutico!: string;
  Dt_resultado!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "CdIntervencao",
      "data",
      "PRM",
      "PrmTipo",
      "Manifestado",
      "Causa",
      "Comunicacao",
      "DiasComunicacao",
      "Resolucao",
      "Resultado",
      "SituacaoResultado",
      "QtdeMedicamentos",
      "QtdeVisitas",
      "Ocorrencia",
      "Farmaceutico",
      "Dt_resultado",
      ];
  }
}

Intervencoes.knex(connections.plano);

export type TIntervencoes = ModelObject<Intervencoes>;
