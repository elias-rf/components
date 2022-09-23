import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../../dal/connections";
import { ClienteModel } from "./cliente.model";
import { TCliente } from "./cliente.type";

export interface TClienteRpc {
  clienteSchema(): Promise<Schema>;
  clienteList(listArgs: ListArgs, ctx?: RpcContext): Promise<TCliente[]>;
  clienteRead(readArgs: ReadArgs, ctx?: RpcContext): Promise<TCliente>;
  clienteDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  clienteCreate(createArgs: CreateArgs, ctx?: RpcContext): Promise<TCliente>;
  clienteUpdate(updateArgs: UpdateArgs, ctx?: RpcContext): Promise<TCliente>;
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
