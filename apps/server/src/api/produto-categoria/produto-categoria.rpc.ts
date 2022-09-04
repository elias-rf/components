import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoCategoriaModel } from "../produto-categoria/produto-categoria.model";
import {
  TProdutoCategoria,
  TProdutoCategoriaId,
} from "../produto-categoria/produto-categoria.type";

export interface TProdutoCategoriaRpc {
  produtoCategoriaList(
    listArgs: ListArgs<TProdutoCategoria>
  ): Promise<TProdutoCategoria[]>;
  produtoCategoriaRead(
    readArgs: ReadArgs<TProdutoCategoriaId, TProdutoCategoria>
  ): Promise<TProdutoCategoria>;
  produtoCategoriaDel(delArgs: DelArgs<TProdutoCategoriaId>): Promise<number>;
  produtoCategoriaCreate(
    createArgs: CreateArgs<TProdutoCategoria>
  ): Promise<TProdutoCategoria>;
  produtoCategoriaUpdate(
    updateArgs: UpdateArgs<TProdutoCategoriaId, TProdutoCategoria>
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
