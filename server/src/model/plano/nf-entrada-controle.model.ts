import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

type NfEntradaControleRecord = {
  CdFilial?: string;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: string;
  CdProduto?: string;
  NumLote?: string;
  Quantidade?: string;
};

export interface NfEntradaControleRpc {
  nfEntradaControleList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaControleRecord[]>;
  nfEntradaControleRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<NfEntradaControleRecord>;
  nfEntradaControleDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaControleCreate: (
    createArgs: CreateArgs<NfEntradaControleRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaControleUpdate: (
    updateArgs: UpdateArgs<NfEntradaControleRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export class NfEntradaControleModel extends Model<NfEntradaControleRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "nfEntradaControle",
      "LotesNotaEntrada",
      ["CdFilial", "NumNota", "Serie", "Modelo"],
      [
        "CdFilial",
        "NumNota",
        "Serie",
        "Modelo",
        "CdFornecedor",
        "CdProduto",
        "NumLote",
        "Quantidade",
      ]
    );
  }
}
