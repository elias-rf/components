import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "../../dal/connections";
import { ProdutoPlanoModel } from "./produto-plano.model";
import { TProdutoPlano } from "./produto-plano.type";

export interface TProdutoPlanoRpc {
  produtoPlanoList(listArgs: ListArgs): Promise<TProdutoPlano[]>;
  produtoPlanoRead(readArgs: ReadArgs): Promise<TProdutoPlano>;
  produtoPlanoDel(delArgs: DelArgs): Promise<number>;
  produtoPlanoCreate(createArgs: CreateArgs): Promise<TProdutoPlano>;
  produtoPlanoUpdate(updateArgs: UpdateArgs): Promise<TProdutoPlano>;
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
