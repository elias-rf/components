import {
  CreateArgs,
  DelArgs,
  Ids,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { EstoqueModel } from "../estoque/estoque.model";
import { TEstoque } from "../estoque/estoque.type";

export interface TEstoqueRpc {
  estoqueList: (listArgs: ListArgs, ctx?: RpcContext) => Promise<TEstoque[]>;
  estoqueRead: (readArgs: ReadArgs, ctx?: RpcContext) => Promise<TEstoque>;
  estoqueDel: ({ id }: DelArgs, ctx?: RpcContext) => Promise<number>;
  estoqueCreate: ({ data }: CreateArgs, ctx?: RpcContext) => Promise<TEstoque>;
  estoqueUpdate: (
    { id, data }: UpdateArgs,
    ctx?: RpcContext
  ) => Promise<TEstoque>;
  estoqueIncrement: (
    { id, quantidade }: { id: Ids; quantidade: number },
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
      return estoqueModel.increment({ id, quantidade });
    },
  };
}
