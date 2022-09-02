import {
  CreateArgs,
  DelArgs,
  Ids,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../dal/connections";
import { EstoqueModel, TEstoqueRecord } from "../model";

export interface TEstoqueRpc {
  estoqueList: (
    listArgs: ListArgs<TEstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<TEstoqueRecord[]>;
  estoqueRead: (
    readArgs: ReadArgs<TEstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<TEstoqueRecord>;
  estoqueDel: (
    { id }: DelArgs<TEstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<number>;
  estoqueCreate: (
    { data }: CreateArgs<TEstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<TEstoqueRecord>;
  estoqueUpdate: (
    { id, data }: UpdateArgs<TEstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<TEstoqueRecord>;
  estoqueIncrement: (
    { id, quantidade }: { id: Ids<TEstoqueRecord>; quantidade: number },
    ctx?: RpcContext
  ) => Promise<{ EstAtual: number }[]>;
}

export function estoqueRpc(connections: TConnections): TEstoqueRpc {
  const estoqueModel = new EstoqueModel(connections);

  return {
    // LIST
    async estoqueList(listArgs) {
      return estoqueModel.list(listArgs);
    },

    // READ
    async estoqueRead(readArgs) {
      return estoqueModel.read(readArgs);
    },

    // DEL
    async estoqueDel(delArgs) {
      return estoqueModel.del(delArgs);
    },

    // CREATE
    async estoqueCreate(createArgs) {
      return estoqueModel.create(createArgs);
    },

    // UPDATE
    async estoqueUpdate(updateArgs) {
      return estoqueModel.update(updateArgs);
    },

    // INCREMENT
    async estoqueIncrement({ id, quantidade }) {
      return estoqueModel.increment(id, quantidade);
    },
  };
}
