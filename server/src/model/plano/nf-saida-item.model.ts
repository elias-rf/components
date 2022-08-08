import { Connections } from "../../dal/connections";
import { Model } from "../model";

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

export class NfSaidaItemModel extends Model<NfSaidaItemRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "nfSaidaItem",
      "ItemNota",
      ["CdFilial", "NumNota", "Serie", "Modelo"],
      [
        "CdFilial",
        "NumNota",
        "Serie",
        "Modelo",
        "DtEmissao",
        "DtSaida",
        "Tipo",
        "CdCliente",
        "CdVendedor",
        "FgEstatistica",
        "FgEstoque",
        "VlTotal",
        "VlProdutos",
        "VlFrete",
        "NumPedido",
        "Nop",
      ]
    );
  }
}
