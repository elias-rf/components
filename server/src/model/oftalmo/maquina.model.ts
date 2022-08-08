import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type MaquinaRecord = {
  kMaquina?: string;
  NomeMaquina?: string;
  Serie?: string;
  fkDivisao?: string;
  fkSetor?: string;
  Descricao?: string;
  FrequenciaManutencao?: string;
  Ativo?: string;
};

export class MaquinaModel extends Model<MaquinaRecord> {
  constructor(connections: Connections) {
    super(connections.oftalmo, "maquina", "tMaquina", ["kMaquina"]);
  }
}
