import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type NfCfopRecord = {
  cfop?: number;
  descricao?: string;
  estatistica?: string;
  estoque?: string;
};

export class NfCfopModel extends EntityModel<NfCfopRecord> {
  constructor(connections: TConnections) {
    super(connections, "nf_cfop");
  }
}
