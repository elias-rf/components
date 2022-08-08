import {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "../../../types";
import { Connections } from "../dal/connections";
import { EstoqueModel, EstoqueRecord } from "../model/plano/estoque.model";

export interface EstoqueRpc {
  estoqueList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<EstoqueRecord[]>;
  estoqueRead: (readArgs: ReadArgs, ctx?: RpcContext) => Promise<EstoqueRecord>;
  estoqueDel: ({ id }: DelArgs, ctx?: RpcContext) => Promise<number>;
  estoqueCreate: (
    { data }: CreateArgs<EstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  estoqueUpdate: (
    { id, data }: UpdateArgs<EstoqueRecord>,
    ctx?: RpcContext
  ) => Promise<Id>;
  estoqueIncrement: (
    { id, quantidade }: { id: Id; quantidade: number },
    ctx?: RpcContext
  ) => Promise<{ EstAtual: number }[]>;
}

export function Estoque(connections: Connections): EstoqueRpc {
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
