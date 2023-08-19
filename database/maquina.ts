import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Maquina extends ModelBase {
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

Maquina.knex(connections.oftalmo);

export type TMaquina = ModelObject<Maquina>;
