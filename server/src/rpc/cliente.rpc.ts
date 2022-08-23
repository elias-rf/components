import type {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../dal/connections";
import { ClienteModel, TClienteRecord } from "../model";

export interface TClienteRpc {
  clienteSchema(): Promise<Schema>;
  clienteList(listArgs: ListArgs, ctx?: RpcContext): Promise<TClienteRecord[]>;
  clienteRead(readArgs: ReadArgs, ctx?: RpcContext): Promise<TClienteRecord>;
  clienteDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  clienteCreate(
    createArgs: CreateArgs<TClienteRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
  clienteUpdate(
    updateArgs: UpdateArgs<TClienteRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
}

export function clienteRpc(connections: TConnections): TClienteRpc {
  const clienteModel = new ClienteModel(connections);

  return {
    // SCHEMA
    async clienteSchema() {
      return clienteModel.schema();
    },

    // LIST
    async clienteList({ where, orderBy, limit, select }) {
      return clienteModel.list(where, orderBy, limit, select);
    },

    // READ
    async clienteRead({ id }) {
      return clienteModel.read(id);
    },

    // DEL
    async clienteDel({ id }) {
      return clienteModel.del(id);
    },

    // CREATE
    async clienteCreate({ data }) {
      return clienteModel.create(data);
    },

    // UPDATE
    async clienteUpdate({ id, data }) {
      return clienteModel.update(id, data);
    },
  };
}
