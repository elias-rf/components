import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type DiamanteRecord = {
  id?: string;
  diamante?: string;
  tipo?: string;
  raio?: string;
  espessura?: string;
  fkMaquina?: string;
  fkFuncionario?: string;
  dataEntrada?: string;
  ordemInicial?: string;
  dataSaida?: string;
  ordemFinal?: string;
  qtdCortes?: string;
};

export class DiamanteModel extends Model<DiamanteRecord> {
  constructor(connections: Connections) {
    super(connections.oftalmo, "diamante", "diamante", ["id"]);
  }
}
