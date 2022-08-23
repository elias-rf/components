import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TNfEntradaLog = {
  CdFilial?: string;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: string;
  Data?: string;
  Usuario?: string;
  Operacao?: string;
};

export class NfEntradaLogModel extends EntityModel<TNfEntradaLog> {
  constructor(connections: TConnections) {
    super(connections, "nfLog");
  }
}
