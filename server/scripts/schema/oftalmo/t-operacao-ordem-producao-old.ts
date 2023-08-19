import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TOperacaoOrdemProducaoOld extends ModelBase {
  static tableName = "tOperacaoOrdemProducaoOld";
  static idColumn = ["kOperacaoOP"];

  kOperacaoOP!: number;
  fkOp!: number;
  fkOperacaoLP!: number;
  fkOperacao!: number;
  fkFuncionario!: number;
  fkMaquina!: string;
  DataHoraInicio!: Date;
  DataInicio!: Date;
  HoraInicio!: string;
  DataHoraFim!: Date;
  DataFim!: Date;
  HoraFim!: string;
  QtdInicial!: number;
  QtdConforme!: number;
  QtdRetrabalho!: number;
  fkOperacaoRetrab!: number;
  Complemento!: string;
  fkOPFilha!: number;
  ViaFilhaAntiga!: number;
  IdPagina!: number;
  OPAntiga!: string;
  ClasseOP!: number;
  EspPriAlca!: string;
  EspSegAlca!: string;
  

  static getFields() {
    return [
      "kOperacaoOP",
      "fkOp",
      "fkOperacaoLP",
      "fkOperacao",
      "fkFuncionario",
      "fkMaquina",
      "DataHoraInicio",
      "DataInicio",
      "HoraInicio",
      "DataHoraFim",
      "DataFim",
      "HoraFim",
      "QtdInicial",
      "QtdConforme",
      "QtdRetrabalho",
      "fkOperacaoRetrab",
      "Complemento",
      "fkOPFilha",
      "ViaFilhaAntiga",
      "IdPagina",
      "OPAntiga",
      "ClasseOP",
      "EspPriAlca",
      "EspSegAlca",
      ];
  }
}

TOperacaoOrdemProducaoOld.knex(connections.oftalmo);

export type TTOperacaoOrdemProducaoOld = ModelObject<TOperacaoOrdemProducaoOld>;
