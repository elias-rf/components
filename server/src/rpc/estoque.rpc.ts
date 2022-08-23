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
import { EstoqueModel, TEstoqueRecord } from "../model";

export interface TEstoqueRpc {
  estoqueList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<TEstoqueRecord[]>;
  estoqueRead: (
    readArgs: ReadArgs,
    ctx?: RpcContext
  ) => Promise<TEstoqueRecord>;
  estoqueDel: ({ id }: DelArgs, ctx?: RpcContext) => Promise<number>;
  estoqueCreate: (
    { data }: CreateArgs<TEstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  estoqueUpdate: (
    { id, data }: UpdateArgs<TEstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  estoqueIncrement: (
    { id, quantidade }: { id: Id; quantidade: number },
    ctx?: RpcContext
  ) => Promise<{ EstAtual: number }[]>;
}

export function estoqueRpc(connections: TConnections): TEstoqueRpc {
  const estoqueModel = new EstoqueModel(connections);

  return {
    // LIST
    async estoqueList({ where, orderBy, limit, select }) {
      return estoqueModel.list(where, orderBy, limit, select);
    },

    // READ
    async estoqueRead({ id, select }) {
      return estoqueModel.read(id, select);
    },

    // DEL
    async estoqueDel({ id }) {
      return estoqueModel.del(id);
    },

    // CREATE
    async estoqueCreate({ data }): Promise<Id> {
      return estoqueModel.create(data);
    },

    // UPDATE
    async estoqueUpdate({ id, data }) {
      return estoqueModel.update(id, data);
    },

    // INCREMENT
    async estoqueIncrement({ id, quantidade }) {
      return estoqueModel.increment(id, quantidade);
    },
  };
}
