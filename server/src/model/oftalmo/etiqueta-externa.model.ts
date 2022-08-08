import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type EtiquetaExternaRecord = {
  controle?: string;
  qtdImpressao?: string;
  dataFabricacao?: string;
};

export class EtiquetaExternaModel extends Model<EtiquetaExternaRecord> {
  constructor(connections: Connections) {
    super(connections.oftalmo, "etiquetaExterna", "tEtiqueta", ["controle"]);
  }
}
