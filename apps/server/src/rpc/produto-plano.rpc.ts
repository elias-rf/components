import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoPlanoModel, TProdutoPlano } from "../model";

export interface TProdutoPlanoRpc {
  produtoPlanoList(listArgs: ListArgs<TProdutoPlano>): Promise<TProdutoPlano[]>;
  produtoPlanoRead(readArgs: ReadArgs<TProdutoPlano>): Promise<TProdutoPlano>;
  produtoPlanoDel(delArgs: DelArgs<TProdutoPlano>): Promise<number>;
  produtoPlanoCreate(
    createArgs: CreateArgs<TProdutoPlano>
  ): Promise<TProdutoPlano>;
  produtoPlanoUpdate(
    updateArgs: UpdateArgs<TProdutoPlano>
  ): Promise<TProdutoPlano>;
}

export function produtoPlanoRpc(connections: TConnections): TProdutoPlanoRpc {
  const produtoPlanoModel = new ProdutoPlanoModel(connections);

  return {
    // LIST
    async produtoPlanoList(args) {
      return produtoPlanoModel.list(args);
    },

    // READ
    async produtoPlanoRead(args) {
      return produtoPlanoModel.read(args);
    },

    // DEL
    async produtoPlanoDel(args) {
      return produtoPlanoModel.del(args);
    },

    // CREATE
    async produtoPlanoCreate(args) {
      return produtoPlanoModel.create(args);
    },

    // UPDATE
    async produtoPlanoUpdate(args) {
      return produtoPlanoModel.update(args);
    },
  };
}
