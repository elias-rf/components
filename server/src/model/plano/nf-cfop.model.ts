import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type NfCfopRecord = {
  Nop?: number;
  Descricao?: string;
  Estatistica?: string;
  Estoque?: string;
};

export class NfCfopModel extends Model<NfCfopRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "nfCfop",
      "NatOpe",
      ["Nop"],
      ["Nop", "Descricao", "Estatistica", "Estoque"]
    );
  }
}
