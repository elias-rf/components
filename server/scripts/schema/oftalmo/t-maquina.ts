import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TMaquina extends ModelBase {
  static tableName = "tMaquina";
  static idColumn = ["kMaquina"];

  kMaquina!: string;
  NomeMaquina!: string;
  Serie!: string;
  fkDivisao!: number;
  fkSetor!: number;
  Descricao!: string;
  FrequenciaManutencao!: string;
  Ativo!: number;

  static getFields() {
    return [
      "kMaquina",
      "NomeMaquina",
      "Serie",
      "fkDivisao",
      "fkDivisao",
      "fkSetor",
      "Descricao",
      "FrequenciaManutencao",
      "Ativo",
    ];
  }
}

TMaquina.knex(connections.oftalmo);

export type TTMaquina = ModelObject<TMaquina>;
