import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TManutencaoCorretiva extends ModelBase {
  static tableName = "tManutencaoCorretiva";
  static idColumn = ["kManutencaoCorretiva"];

  kManutencaoCorretiva!: number;
  DataHoraInicio!: Date;
  fkFuncionario!: number;
  fkMaquina!: string;
  DescricaoProblema!: string;
  DataHoraFinal!: Date;
  Diagnostico!: string;
  DescricaoSolucao!: string;
  ResponsavelManutencao!: string;
  Travado!: number;
  UsuarioConclusao!: string;
  

  static getFields() {
    return [
      "kManutencaoCorretiva",
      "DataHoraInicio",
      "fkFuncionario",
      "fkMaquina",
      "DescricaoProblema",
      "DataHoraFinal",
      "Diagnostico",
      "DescricaoSolucao",
      "ResponsavelManutencao",
      "Travado",
      "UsuarioConclusao",
      ];
  }
}

TManutencaoCorretiva.knex(connections.oftalmo);

export type TTManutencaoCorretiva = ModelObject<TManutencaoCorretiva>;
