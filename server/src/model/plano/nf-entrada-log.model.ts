import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type NfEntradaLogRecord = {
  CdFilial?: string;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: string;
  Data?: string;
  Usuario?: string;
  Operacao?: string;
};

export class NfEntradaLogModel extends Model<NfEntradaLogRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "nfLog",
      "NfLogConferencia",
      ["CdFilial", "NumNota", "Serie", "Modelo"],
      [
        "CdFilial",
        "NumNota",
        "Serie",
        "Modelo",
        "CdFornecedor",
        "Data",
        "Usuario",
        "Operacao",
      ]
    );
  }
}
