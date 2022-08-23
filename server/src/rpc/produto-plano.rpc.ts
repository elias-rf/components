import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoPlanoModel, TProdutoPlano } from "../model";

export interface TProdutoPlanoRpc {
  produtoPlanoList(listArgs: ListArgs): Promise<TProdutoPlano[]>;
  produtoPlanoRead(readArgs: ReadArgs): Promise<TProdutoPlano>;
  produtoPlanoDel(delArgs: DelArgs): Promise<number>;
  produtoPlanoCreate(createArgs: CreateArgs<TProdutoPlano>): Promise<string[]>;
  produtoPlanoUpdate(updateArgs: UpdateArgs<TProdutoPlano>): Promise<any>;
}

export function produtoPlanoRpc(connections: TConnections): TProdutoPlanoRpc {
  const produtoPlanoModel = new ProdutoPlanoModel(connections);

  return {
    // LIST
    async produtoPlanoList({ where, orderBy, limit = 1000, select }) {
      return produtoPlanoModel.list(where, orderBy, limit, select);
    },

    // READ
    async produtoPlanoRead({ id, select }) {
      return produtoPlanoModel.read(id, select);
    },

    // DEL
    async produtoPlanoDel({ id }) {
      return produtoPlanoModel.del(id);
    },

    // CREATE
    async produtoPlanoCreate({ data }) {
      return produtoPlanoModel.create(data);
    },

    // UPDATE
    async produtoPlanoUpdate({ id, data }) {
      return produtoPlanoModel.update(id, data);
    },
  };
}
