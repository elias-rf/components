import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoImpConvenio extends ModelBase {
  static tableName = "ConfiguracaoImpConvenio";
  static idColumn = ["IdLayOut"];

  IdLayOut!: string;
  MatriculaInicial!: number;
  MatriculaFinal!: number;
  NomeInicial!: number;
  NomeFinal!: number;
  BloqueioInicial!: number;
  BloqueioFinal!: number;
  TextoBloqueio!: string;
  LimiteInicial!: number;
  LimiteFinal!: number;
  CasasDecimaisLimite!: number;
  TitularInicial!: number;
  TitularFinal!: number;
  TextoTitular!: string;
  DependenteInicial!: number;
  DependenteFinal!: number;
  TextoDependente!: string;
  

  static getFields() {
    return [
      "IdLayOut",
      "MatriculaInicial",
      "MatriculaFinal",
      "NomeInicial",
      "NomeFinal",
      "BloqueioInicial",
      "BloqueioFinal",
      "TextoBloqueio",
      "LimiteInicial",
      "LimiteFinal",
      "CasasDecimaisLimite",
      "TitularInicial",
      "TitularFinal",
      "TextoTitular",
      "DependenteInicial",
      "DependenteFinal",
      "TextoDependente",
      ];
  }
}

ConfiguracaoImpConvenio.knex(connections.plano);

export type TConfiguracaoImpConvenio = ModelObject<ConfiguracaoImpConvenio>;
