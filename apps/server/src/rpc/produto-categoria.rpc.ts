import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoCategoriaModel, TProdutoCategoria } from "../model";

export interface TProdutoCategoriaRpc {
  produtoCategoriaList(
    listArgs: ListArgs<TProdutoCategoria>
  ): Promise<TProdutoCategoria[]>;
  produtoCategoriaRead(
    readArgs: ReadArgs<TProdutoCategoria>
  ): Promise<TProdutoCategoria>;
  produtoCategoriaDel(delArgs: DelArgs<TProdutoCategoria>): Promise<number>;
  produtoCategoriaCreate(
    createArgs: CreateArgs<TProdutoCategoria>
  ): Promise<TProdutoCategoria>;
  produtoCategoriaUpdate(
    updateArgs: UpdateArgs<TProdutoCategoria>
  ): Promise<TProdutoCategoria>;
}

export function produtoCategoriaRpc(
  connections: TConnections
): TProdutoCategoriaRpc {
  const produtoCategoriaModel = new ProdutoCategoriaModel(connections);

  return {
    // LIST
    async produtoCategoriaList(args) {
      return produtoCategoriaModel.list(args);
    },

    // READ
    async produtoCategoriaRead(args) {
      return produtoCategoriaModel.read(args);
    },

    // DEL
    async produtoCategoriaDel(args) {
      return produtoCategoriaModel.del(args);
    },

    // CREATE
    async produtoCategoriaCreate(args) {
      return produtoCategoriaModel.create(args);
    },

    // UPDATE
    async produtoCategoriaUpdate(args) {
      return produtoCategoriaModel.update(args);
    },
  };
}
