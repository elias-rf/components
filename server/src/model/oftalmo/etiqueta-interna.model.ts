import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type EtiquetaInternaRecord = {
  NumControle?: string;
  fkProdutoItem?: string;
  DataInsercao?: string;
};

export class EtiquetaInternaModel extends Model<EtiquetaInternaRecord> {
  constructor(connections: Connections) {
    super(connections.oftalmo, "etiquetaInterna", "tbl_producao_etiqueta", [
      "NumControle",
    ]);
  }
}
