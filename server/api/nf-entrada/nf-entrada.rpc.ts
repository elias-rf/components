import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "../../../types";
import { TNfEntrada } from "../../../types/nf-entrada.type";
import type { TConnections } from "../../dal/connections";
import { NfEntradaModel } from "../nf-entrada/nf-entrada.model";

export interface TNfEntradaRpc {
  nfEntradaSchema: () => Promise<Schema>;
  nfEntradaList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntrada[]>;
  nfEntradaRead: (readArgs: ReadArgs, ctx?: RpcContext) => Promise<TNfEntrada>;
  nfEntradaDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaCreate: (
    createArgs: CreateArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntrada>;
  nfEntradaUpdate: (
    { id, data }: UpdateArgs,
    ctx?: RpcContext
  ) => Promise<TNfEntrada>;
  nfEntradaTransferenciaCreate: ({
    controle,
  }: {
    controle: string[];
  }) => Promise<boolean>;
}

export function nfEntradaRpc(connections: TConnections): TNfEntradaRpc {
  const nfEntrada = new NfEntradaModel(connections);

  return {
    async nfEntradaSchema() {
      return nfEntrada.schema();
    },
    // LIST
    async nfEntradaList(args) {
      return nfEntrada.list(args) as Promise<TNfEntrada[]>;
    },

    // READ
    async nfEntradaRead(args) {
      return nfEntrada.read(args) as Promise<TNfEntrada>;
    },

    // DEL
    async nfEntradaDel(args): Promise<number> {
      return nfEntrada.del(args);
    },

    // CREATE
    async nfEntradaCreate(args) {
      return nfEntrada.create(args) as Promise<TNfEntrada>;
    },

    // UPDATE
    async nfEntradaUpdate(args) {
      return nfEntrada.update(args) as Promise<TNfEntrada>;
    },

    // TRANSFERENCIA CREATE
    async nfEntradaTransferenciaCreate(args) {
      return nfEntrada.nfEntradaTransferenciaCreate(args);
    },
  };
}
