import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ManutencaoPreventiva extends ModelBase {
  static tableName = "tManutencaoPreventiva";
  static idColumn = ["kManutencaoPreventiva"];

  kManutencaoPreventiva!: number;
  fkMaquina!: string;
  DataManutencao!: Date;
  DataHoraInicio!: Date;
  DataHoraFinal!: Date;
  MaterialUtilizadoItemProblema!: string;
  Observacao!: string;
  ResponsavelManutencao!: string;
  MotivoNaoConclusaoNoPrazo!: string;
  UsuarioConclusao!: string;
  LiberadoPor!: string;

  static getFields() {
    return [
      "kManutencaoPreventiva",
      "fkMaquina",
      "DataManutencao",
      "DataHoraInicio",
      "DataHoraFinal",
      "MaterialUtilizadoItemProblema",
      "Observacao",
      "ResponsavelManutencao",
      "MotivoNaoConclusaoNoPrazo",
      "UsuarioConclusao",
      "LiberadoPor",
    ];
  }
}

ManutencaoPreventiva.knex(connections.oftalmo);

export type TManutencaoPreventiva = ModelObject<ManutencaoPreventiva>;
