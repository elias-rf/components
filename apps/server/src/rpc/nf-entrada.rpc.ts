import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../dal/connections";
import { NfEntradaModel, TNfEntrada } from "../model";

export interface TNfEntradaRpc {
  nfEntradaSchema: () => Promise<Schema>;
  nfEntradaList: (
    listArgs: ListArgs<TNfEntrada>,
    ctx?: RpcContext
  ) => Promise<TNfEntrada[]>;
  nfEntradaRead: (
    readArgs: ReadArgs<TNfEntrada>,
    ctx?: RpcContext
  ) => Promise<TNfEntrada>;
  nfEntradaDel: (
    delArgs: DelArgs<TNfEntrada>,
    ctx?: RpcContext
  ) => Promise<number>;
  nfEntradaCreate: (
    createArgs: CreateArgs<TNfEntrada>,
    ctx?: RpcContext
  ) => Promise<TNfEntrada>;
  nfEntradaUpdate: (
    { id, data }: UpdateArgs<TNfEntrada>,
    ctx?: RpcContext
  ) => Promise<TNfEntrada>;
  nfEntradaTransferenciaCreate: (controles: string[]) => Promise<boolean>;
}

export function nfEntradaRpc(connections: TConnections): TNfEntradaRpc {
  const nfEntrada = new NfEntradaModel(connections);

  return {
    async nfEntradaSchema() {
      return nfEntrada.schema();
    },
    // LIST
    async nfEntradaList(args) {
      return nfEntrada.list(args);
    },

    // READ
    async nfEntradaRead(args) {
      return nfEntrada.read(args);
    },

    // DEL
    async nfEntradaDel(args): Promise<number> {
      return nfEntrada.del(args);
    },

    // CREATE
    async nfEntradaCreate(args) {
      return nfEntrada.create(args);
    },

    // UPDATE
    async nfEntradaUpdate(args) {
      return nfEntrada.update(args);
    },

    // TRANSFERENCIA CREATE
    async nfEntradaTransferenciaCreate(args) {
      return nfEntrada.nfEntradaTransferenciaCreate(args);
    },
  };
}
