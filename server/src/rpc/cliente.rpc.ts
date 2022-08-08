import type {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "../../../types";
import type { Connections } from "../dal/connections";
import { ClienteModel, ClienteRecord } from "../model/plano/cliente.model";

export interface ClienteRpc {
  clienteSchema(): Promise<Schema>;
  clienteList(listArgs: ListArgs, ctx?: RpcContext): Promise<ClienteRecord[]>;
  clienteRead(readArgs: ReadArgs, ctx?: RpcContext): Promise<ClienteRecord>;
  clienteDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  clienteCreate(
    createArgs: CreateArgs<ClienteRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
  clienteUpdate(
    updateArgs: UpdateArgs<ClienteRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
}

export function Cliente(connections: Connections): ClienteRpc {
  const clienteModel = new ClienteModel(connections);

  return {
    // SCHEMA
    async clienteSchema() {
      return clienteModel.schema();
    },

    // LIST
    async clienteList({ where, orderBy, limit, select }, ctx?) {
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
