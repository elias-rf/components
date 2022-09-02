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
import { ClienteModel, TCliente } from "../model";

export interface TClienteRpc {
  clienteSchema(): Promise<Schema>;
  clienteList(
    listArgs: ListArgs<TCliente>,
    ctx?: RpcContext
  ): Promise<TCliente[]>;
  clienteRead(
    readArgs: ReadArgs<TCliente>,
    ctx?: RpcContext
  ): Promise<TCliente>;
  clienteDel(delArgs: DelArgs<TCliente>, ctx?: RpcContext): Promise<number>;
  clienteCreate(
    createArgs: CreateArgs<TCliente>,
    ctx?: RpcContext
  ): Promise<TCliente>;
  clienteUpdate(
    updateArgs: UpdateArgs<TCliente>,
    ctx?: RpcContext
  ): Promise<TCliente>;
}

export function clienteRpc(connections: TConnections): TClienteRpc {
  const clienteModel = new ClienteModel(connections);

  return {
    // SCHEMA
    async clienteSchema() {
      return clienteModel.schema();
    },

    // LIST
    async clienteList(args) {
      return clienteModel.list(args);
    },

    // READ
    async clienteRead(args) {
      return clienteModel.read(args);
    },

    // DEL
    async clienteDel(args) {
      return clienteModel.del(args);
    },

    // CREATE
    async clienteCreate(args) {
      return clienteModel.create(args);
    },

    // UPDATE
    async clienteUpdate(args) {
      return clienteModel.update(args);
    },
  };
}
