import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type NfSaidaItemRecord = {
  CdFilial?: number;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  Sequencia?: number;
  CdProduto?: string;
  Quantidade?: number;
  QtdAtendida?: number;
  VlUnitario?: number;
  VlTotal?: number;
  PercDesconto?: number;
  VlLiquido?: number;
  FgEstoque?: string;
  CdVendedor?: number;
  DtEmissao?: string;
  Nop: string;
};

export class NfSaidaItemModel extends EntityModel<NfSaidaItemRecord> {
  constructor(connections: TConnections) {
    super(connections, "nfSaidaItem");
  }
}
