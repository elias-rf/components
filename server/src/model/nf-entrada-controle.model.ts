import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

type TNfEntradaControle = {
  filial_id?: string;
  nota_id?: string;
  serie_id?: string;
  modelo_id?: string;
  fornecedor_id?: string;
  produto_id?: string;
  controle?: string;
  quantidade?: string;
};

export interface NfEntradaControleRpc {
  nfEntradaControleList: (
    listArgs: ListArgs<TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaControle[]>;
  nfEntradaControleRead: (
    readArgs: ReadArgs<TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<TNfEntradaControle>;
  nfEntradaControleDel: (
    delArgs: DelArgs<TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<number>;
  nfEntradaControleCreate: (
    createArgs: CreateArgs<TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<Id<TNfEntradaControle>>;
  nfEntradaControleUpdate: (
    updateArgs: UpdateArgs<TNfEntradaControle>,
    ctx?: RpcContext
  ) => Promise<Id<TNfEntradaControle>>;
}

export class NfEntradaControleModel extends EntityModel<TNfEntradaControle> {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_controle");
  }
}
